import type { IModalProps } from "../../types/props";
import "./Modal.css";

export const Modal = ({ active, setActive, children }: IModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
