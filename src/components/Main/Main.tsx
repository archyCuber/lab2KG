import React, { useRef } from "react";
import { ButtonPanel } from "../../core/ButtonPanel/ButtonPanel";
import { useButtonsConfig } from "../../configs/configButtons";
import { useMoveSubscribe } from "./hooks/useMoveSubscribe";
import { useInit } from "./hooks/useInit";
import { RotateArea } from "../RotateArea/RotateArea";
import { ZoomPanel } from "../Zoom/ZoomPanel";
const MAIN_WIDTH = document.body.clientWidth;
const MAIN_HEIGHT = document.body.clientHeight - 60;

export const Main = () => {
  const canvasMain = useRef({} as HTMLCanvasElement);
  const buttons = useButtonsConfig();
  useMoveSubscribe();
  useInit(canvasMain, MAIN_WIDTH, MAIN_HEIGHT);

  return (
    <div>
      <canvas ref={canvasMain}></canvas>
        <ZoomPanel />
        <ButtonPanel buttonsConfig={buttons} />
      <RotateArea />
    </div>
  );
};
