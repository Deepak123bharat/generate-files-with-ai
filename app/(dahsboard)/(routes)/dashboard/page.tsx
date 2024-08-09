"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CodeIcon,
  FileSpreadsheet,
  FileText,
  MessageSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const tools = [
    {
      lable: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation",
    },
    {
      lable: "Generate Code",
      icon: CodeIcon,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      href: "/code",
    },
    {
      lable: "Generate PDF",
      icon: FileText,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      href: "/pdf",
    },
    {
      lable: "Generate Excel",
      icon: FileSpreadsheet,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      href: "/excel",
    },
  ];
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Generate Invoices and files with AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:Shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.icon)}></tool.icon>
              </div>
              <div className="font-semibold">{tool.lable}</div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
