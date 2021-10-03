import React from "react";
import { ModalDialog } from "../../core/ModalDialog/ModalDialog";
import { AngleModalContent } from "./AngleModalContent";
import { useMainContext } from "../Main/MainContext";

export const AngleModal = () => {
  const { showAngleModal, onChangeShowAngleModal } = useMainContext();
  return (
    <ModalDialog
      show={showAngleModal}
      onClose={() => onChangeShowAngleModal(false)}
    >
      <AngleModalContent />
    </ModalDialog>
  );
};
