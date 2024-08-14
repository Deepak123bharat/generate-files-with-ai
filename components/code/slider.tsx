"use client";

import { Button } from "@/components/ui/button";
import { useCallback, useRef, useState } from "react";

const Slider = () => {
  const [segment1, setSegment1] = useState(30);
  const [segment2, setSegment2] = useState(30);
  const [segment3, setSegment3] = useState(40);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = useCallback(
    (event: MouseEvent, type: "first" | "second") => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const percentage = Math.max(
        0,
        Math.min(100, (x / containerRect.width) * 100)
      );

      if (type === "first") {
        const newSegment1 = Math.max(
          0,
          Math.min(percentage, segment1 + segment2)
        );
        const newSegment2 = Math.max(
          0,
          Math.min(segment1 + segment2 - newSegment1, 100 - newSegment1)
        );
        setSegment1(newSegment1);
        setSegment2(newSegment2);
      } else if (type === "second") {
        const newSegment2 = Math.max(
          0,
          Math.min(percentage - segment1, segment2 + segment3)
        );
        const newSegment3 = Math.max(
          0,
          Math.min(segment2 + segment3 - newSegment2, 100 - newSegment2)
        );
        setSegment2(newSegment2);
        setSegment3(newSegment3);
      }
    },
    [segment1, segment2, segment3]
  );

  const startDragging = useCallback(
    (type: "first" | "second") => {
      const onMouseMove = (event: MouseEvent) => handleDrag(event, type);
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [handleDrag]
  );

  const firstIntersection = segment1;
  const secondIntersection = segment1 + segment2;

  return (
    <div
      ref={containerRef}
      className="flex flex-col w-1/2 h-full border justify-center"
    >
      <div className="relative p-6 rounded-md bg-white flex items-center h-3/4">
        <div className="bg-red-500 h-2" style={{ width: `${segment1}%` }}></div>
        <div
          className="bg-yellow-500 h-2"
          style={{ width: `${segment2}%` }}
        ></div>
        <div
          className="bg-green-500 h-2"
          style={{ width: `${segment3}%` }}
        ></div>

        <div
          className="absolute w-6 h-6 bg-slate-900 rounded-full cursor-pointer"
          style={{
            left: `${firstIntersection}%`,
          }}
          onMouseDown={() => startDragging("first")}
        ></div>

        <div
          className="absolute w-6 h-6 bg-slate-900 rounded-full cursor-pointer"
          style={{
            left: `${secondIntersection}%`,
            transform: "translateX(-50%)",
          }}
          onMouseDown={() => startDragging("second")}
        ></div>
      </div>

      <div className="flex justify-center items-center h-1/4">
        <Button className="w-32 mb-5">Use Component</Button>
      </div>
    </div>
  );
};

export default Slider;
