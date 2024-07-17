import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWord() {
  const words = ["NICE", "GREAT", "PASSION", "CREATIVE"];

  return (
    <div className=" flex justify-center items-center ">
      <div className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        FEEL
        <FlipWords words={words} /> <br />
        LISTEN YOUR HARMONY
      </div>
    </div>
  );
}
