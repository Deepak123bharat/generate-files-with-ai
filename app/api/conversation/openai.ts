import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.OPENAI_API_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchOpenAICompletion(messages: any) {
  const maxRetries = 3;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
      });
      return response.data.choices[0].message;
    } catch (error: any) {
      if (error.response?.status === 429) {
        retryCount++;
        const waitTime = Math.pow(2, retryCount) * 5000;
        console.log(`Rate limited. Retrying in ${waitTime / 1000} seconds...`);
        await delay(waitTime);
      } else {
        throw error;
      }
    }
  }

  throw new Error("Exceeded maximum retry attempts due to rate limiting.");
}

// Usage in your POST function
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }
    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const result = await fetchOpenAICompletion(messages);
    return NextResponse.json(result);
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
