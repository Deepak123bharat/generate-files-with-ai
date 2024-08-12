import Avatar from "./avatar";
import Slider from "./slider";

interface TemplateProps {}

const Template = ({}: TemplateProps) => {
  return (
    <div className="flex gap-6 h-1/2  p-6 rounded-md bg-white">
      <Avatar />
      <Slider />
    </div>
  );
};

export default Template;
