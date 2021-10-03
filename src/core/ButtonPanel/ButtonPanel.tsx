import React from "react";
import styles from "./styled/ButtonPanel.module.scss";
import { Button } from "@material-ui/core";

export const ButtonPanel = (props: {
  buttonsConfig: { title: string; handleClick: () => void }[];
}) => {
  return (
    <div className={styles.root}>
      {props.buttonsConfig && props.buttonsConfig.length
        ? props.buttonsConfig.map((item) => {
            return (
              <Button variant={"contained"} onClick={item.handleClick}>
                {item.title}
              </Button>
            );
          })
        : null}
    </div>
  );
};
