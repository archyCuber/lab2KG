import React, { useEffect } from "react";
import helper from "../../../helpers/helper";

export const useInit = (
  canvasMain: React.MutableRefObject<HTMLCanvasElement>,
  width: number,
  height: number
) => {
  useEffect(() => {
    helper.init(canvasMain, width, height);
  }, []);
};
