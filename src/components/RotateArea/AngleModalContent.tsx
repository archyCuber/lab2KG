import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styles from "./AngleContent.module.scss";

export const AngleModalContent = () => {
  const [angle, setAngle] = useState(0);
  return (
    <div className={styles.root}>
      <TextField
        type={"number"}
        id="outlined-basic"
        label="angle"
        variant="outlined"
        value={angle}
        onChange={(value) => setAngle(+value)}
      />
      <Button>Submit</Button>
    </div>
  );
};
