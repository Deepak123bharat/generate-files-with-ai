"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AvatarProps {}

const Avatar = ({}: AvatarProps) => {
  const [isRotated, setIsRotated] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsRotated((prev) => !prev);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-1/2 h-full border p-6 rounded-md bg-white">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-28 h-28">
            <div className={`flip-container ${isRotated ? "rotate" : ""}`}>
              <div className="flip-image front">
                <Image
                  src="/images/avatar.jpeg"
                  alt="Front Avatar"
                  width={100}
                  height={100}
                  priority={false}
                  className="rounded-full "
                />
              </div>

              <div className="flip-image back">
                <Image
                  src="/images/krishna.webp"
                  alt="Back Avatar"
                  width={100}
                  height={100}
                  priority={true}
                  className="rounded-full "
                />
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold">Deepak Singh Rathore</p>

          <div className="text-gray-400">React Developer</div>
          <Button className="bg-gray-900">Use Component</Button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
