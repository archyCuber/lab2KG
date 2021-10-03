import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useMainContext } from "../Main/MainContext";
import styles from "./AngleWithPointModalContent.module.scss";
import helper from "../../helpers/helper";

interface IPoint {
  x: string;
  y: string;
}

export const AngleWithPointModalContent = () => {
  const [point, setPoint] = useState<IPoint>({} as IPoint);
  const [angle, setAngle] = useState("");
  const { onChangeShowRotatePointModal } = useMainContext();
  return (
    <div className={styles.root}>
      <div className={styles.pointArea}>
        <span>[</span>
        <TextField
          style={{ width: 100 }}
          size={"small"}
          type={"number"}
          id="outlined-basic"
          label="X"
          variant="outlined"
          value={point.x}
          onChange={(e) => setPoint({ ...point, x: e.target.value })}
        />
        <span>;</span>
        <TextField
          style={{ width: 100 }}
          size={"small"}
          type={"number"}
          id="outlined-basic"
          label="Y"
          variant="outlined"
          value={point.y}
          onChange={(e) => setPoint({ ...point, y: e.target.value })}
        />
        <span>]</span>
      </div>

      <TextField
        size={"small"}
        type={"number"}
        id="outlined-basic"
        label="Angle"
        variant="outlined"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
      />

      <Button
        onClick={() => {
          helper.rotateFigureWithPoint((+angle * Math.PI) / 180, point);
          onChangeShowRotatePointModal(false);
        }}
      >
        Submit
      </Button>
    </div>
  );
};
