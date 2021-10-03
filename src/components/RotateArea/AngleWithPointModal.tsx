import React from "react";
import { ModalDialog } from "../../core/ModalDialog/ModalDialog";
import { useMainContext } from "../Main/MainContext";
import { AngleWithPointModalContent } from "./AngleWithPointModalContent";

export const AngleWithPointModal = () => {
  const { showRotatePointModal, onChangeShowRotatePointModal } =
    useMainContext();

  return (
    <ModalDialog
      show={showRotatePointModal}
      onClose={() => onChangeShowRotatePointModal(false)}
    >
      <AngleWithPointModalContent />
    </ModalDialog>
  );
};
