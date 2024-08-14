"use client";

import { Button } from "@/components/ui/button";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

interface EditorProps {}

const Editor = ({}: EditorProps) => {
  const [code, setCode] = useState<string>("");

  return (
    <div className="h-full  p-6 rounded-md bg-white flex flex-col gap-4">
      <div className="h-full flex gap-6">
        <div className="w-1/2 h-full border p-5 flex flex-col gap-3">
          <p className="">Lorem loearm loarem</p>
          <Button
            onClick={() =>
              setCode(
                code === ""
                  ? `<p>Lorem loearm loarem</p> \n<Button >Click Me</Button>`
                  : ""
              )
            }
            className="bg-gray-400 hover:bg-gray-400 w-1/3"
          >
            {code === "" ? "Click Me" : "Reset"}
          </Button>
        </div>
        <div className="w-1/2 h-full">
          <CodeMirror value={code} height="100px" theme={vscodeLight} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
