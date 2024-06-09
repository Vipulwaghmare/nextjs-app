import { FC } from "react";
import { createPortal } from "react-dom";
import "./index.css";

interface modelCompInterface {
  onClose: () => void;
}

type TModal = {
  showModal: boolean;
  onClose: () => void;
  Component: FC<modelCompInterface>;
};

const ProjectModel = ({ showModal, onClose, Component }: TModal) => {
  if (!showModal) return null;
  return createPortal(
    <div className="project-model-container" onClick={onClose}>
      <Component onClose={onClose} />
    </div>,
    document.body,
  );
};

export default ProjectModel;
