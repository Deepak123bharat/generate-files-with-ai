import Editor from "@/components/code/editor";
import Template from "@/components/code/template";

const Page = () => {
  return (
    <div className="p-5 h-full flex flex-col gap-6">
      <Template />
      <Editor />
    </div>
  );
};

export default Page;
