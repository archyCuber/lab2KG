import React from "react";
import {Dialog, Slide} from "@material-ui/core";
import {TransitionProps} from "@material-ui/core/transitions";

interface IModalProps {
  show: boolean;
  onClose: () => void;
  children: any;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children?: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalDialog = ({ show, onClose, children }: IModalProps) => {
  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {children}
    </Dialog>
  );
};
