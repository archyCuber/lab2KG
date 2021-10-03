import React, { useState } from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@material-ui/core";
import styles from "./ZoomPanel.module.scss";
import helper from "../../helpers/helper";

export enum ZoomType {
    x = 0,
    y = 1,
    xy = 3,
}

export const ZoomPanel = () => {
    const [type, setType] = useState<ZoomType>(ZoomType.x);
    return (
        <div className={styles.root}>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Zoom Type</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="radio-buttons-group"
                        value={type}
                    >
                        <FormControlLabel
                            value={ZoomType.x}
                            control={
                                <Radio
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            setType(ZoomType.x);
                                        }
                                    }}
                                />
                            }
                            label="X"
                        />
                        <FormControlLabel
                            value={ZoomType.y}
                            control={
                                <Radio
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            setType(ZoomType.y);
                                        }
                                    }}
                                />
                            }
                            label="Y"
                        />
                        <FormControlLabel
                            value={ZoomType.xy}
                            control={
                                <Radio
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            setType(ZoomType.xy);
                                        }
                                    }}
                                />
                            }
                            label="X + Y"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={styles.buttonPanel}>
                <Button
                    variant="contained"
                    onClick={() => {
                        helper.zoomFigure(type, true);
                    }}
                >
                    +
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        helper.zoomFigure(type, false);
                    }}
                >
                    -
                </Button>
            </div>
        </div>
    );
};
