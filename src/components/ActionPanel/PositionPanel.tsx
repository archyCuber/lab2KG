import React from "react";
import { Button } from "@material-ui/core";
import styles from "./styled/PositionPanel.module.scss";
import helper from "../../helpers/helper";

export const PositionPanel = () => {
  return (
    <div className={styles.root}>
      <Button variant={"contained"} onClick={() => helper.movePositionY("up")}>
        Top
      </Button>
      <Button
        variant={"contained"}
        onClick={() => helper.movePositionY("down")}
      >
        Down
      </Button>
      <Button
        variant={"contained"}
        onClick={() => helper.movePositionX("left")}
      >
        Left
      </Button>
      <Button
        variant={"contained"}
        onClick={() => helper.movePositionX("right")}
      >
        Right
      </Button>
    </div>
  );
};
