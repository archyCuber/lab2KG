import React, { useEffect, useRef } from "react";
import helper from "../../helpers/helper";
import { ActionPanel } from "../ActionPanel/ActionPanel";
const MAIN_WIDTH = document.body.clientWidth;
const MAIN_HEIGHT = document.body.clientHeight - 60;

export const Main = () => {
  const canvasMain = useRef({} as HTMLCanvasElement);

  useEffect(() => {
    helper.init(canvasMain, MAIN_WIDTH, MAIN_HEIGHT);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e: any) => {
      console.log(e);
      switch (e.key) {
        case "ArrowUp":
          helper.movePositionY("up");
          break;
        case "ArrowDown":
          helper.movePositionY("down");
          break;
        case "ArrowRight":
          helper.movePositionX("right");
          break;
        case "ArrowLeft":
          helper.movePositionX("left");
          break;
      }
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasMain}></canvas>
      <ActionPanel />
    </div>
  );
};
