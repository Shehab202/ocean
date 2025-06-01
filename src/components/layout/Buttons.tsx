import React from "react";
interface ButtonsProps {
  buttonStyle: "btn-primary" | "btn-secondary" | "btn-outline";
  title: string;
  children?: React.ReactNode;
}
const Buttons = ({ buttonStyle ,title,children}: ButtonsProps) => {
  return (
    <div>
      <button
        className={
          buttonStyle === "btn-primary"
            ? "btn-primary"
            : buttonStyle === "btn-secondary"
            ? "btn-secondary"
            : "btn-outline"
        }
      >
        {title}
        {children}

      </button>
    </div>
  );
};

export default Buttons;
