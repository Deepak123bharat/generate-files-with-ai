"use client";

import { Button } from "@/components/ui/button";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

interface EditorProps {}

const Editor = ({}: EditorProps) => {
  const [code, setCode] = useState<string>("");

  return (
    <div className="h-full  p-6 rounded-md bg-white flex flex-col gap-4">
      {/* <div className="h-10 flex gap-6">
        <Button
          className="bg-slate-900"
          onClick={() =>
            setCode(
              `<p>Lorem loearm loarem</p> \n<Button className="bg-blue-600">Click Me</Button>`
            )
          }
        >
          Generate Code
        </Button>
        <Button className="bg-slate-900" onClick={() => setCode(``)}>
          Reset
        </Button>
      </div> */}
      <div className="h-full flex gap-6">
        <div className="w-1/2 h-full border p-5 flex flex-col gap-3">
          <p className="">Lorem loearm loarem</p>
          <Button
            onClick={() =>
              setCode(
                code === ""
                  ? `<p>Lorem loearm loarem</p> \n<Button className="bg-blue-600">Click Me</Button>`
                  : ""
              )
            }
            className="bg-slate-900 w-1/3"
          >
            {code === "" ? "Click Me" : "Reset"}
          </Button>
        </div>
        <div className="w-1/2 h-full bg-slate-900">
          <CodeMirror value={code} height="100px" theme={vscodeDark} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
