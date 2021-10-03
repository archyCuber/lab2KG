import { useEffect } from "react";
import helper from "../../../helpers/helper";

export const useMoveSubscribe = () => {
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
};
