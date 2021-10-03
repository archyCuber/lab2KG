import React from "react";
import styles from "./styled/ActionPanel.module.scss";
import { PositionPanel } from "./PositionPanel";

export const ActionPanel = () => {
  return (
    <div className={styles.root}>
      <PositionPanel/>
    </div>
  );
};
