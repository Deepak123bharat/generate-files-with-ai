import Editor from "./(collection)/editor";
import Template from "./(collection)/template";

const Page = () => {
  return (
    <div className="p-5 h-full flex flex-col gap-6">
      <Template />
      <Editor />
    </div>
  );
};

export default Page;
