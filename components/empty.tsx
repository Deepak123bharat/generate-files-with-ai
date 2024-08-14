import Image from "next/image";

interface EmptyProps {}

const Empty = ({}: EmptyProps) => {
  return (
    <div>
      <Image
        width={250}
        height={250}
        src="/images/empty.png"
        alt="Empty Chat"
      />
    </div>
  );
};

export default Empty;
