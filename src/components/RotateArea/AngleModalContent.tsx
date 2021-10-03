import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styles from "./AngleContent.module.scss";
import helper from "../../helpers/helper";
import { useMainContext } from "../Main/MainContext";

export const AngleModalContent = () => {
  const [angle, setAngle] = useState("");
  const { onChangeShowAngleModal } = useMainContext();

  const handleRotate = () => {
    helper.rotateFigure((+angle * Math.PI) / 180);
    onChangeShowAngleModal(false);
  };
  return (
    <div className={styles.root}>
      <TextField
        type={"number"}
        id="outlined-basic"
        label="Angle"
        variant="outlined"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
      />
      <Button onClick={handleRotate}>Submit</Button>
    </div>
  );
};
