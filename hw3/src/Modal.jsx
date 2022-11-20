import { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
  const container = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(container);
    return () => {
      modalRoot.removeChild(container);
    };
  }, [container]);
    console.log(children)
  return ReactDOM.createPortal(children, container);
};
export default Modal;

