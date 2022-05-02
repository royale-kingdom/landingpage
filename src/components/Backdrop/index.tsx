import { ReactNode } from "react";
import ReactDOM from "react-dom";

// styled container in public/index.html
const container = document.getElementById("backdrop")!;

const Backdrop = ({ children }: { children: ReactNode }) =>
  ReactDOM.createPortal(
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0, 0.6)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100
      }}
    >
      {children}
    </div>,
    container
  );

export default Backdrop;
