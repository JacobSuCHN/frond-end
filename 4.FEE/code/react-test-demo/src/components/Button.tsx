import React from "react";
import { useBoolean } from "../hooks/useBoolean";

const buttonTypes = ["primary", "secondary", "danger"] as const;

type buttonTypes = (typeof buttonTypes)[number];

interface IButtonProps {
  type?: buttonTypes;
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ type, children }) => {
  const [isDisabled, toggle] = useBoolean(false);
  return (
    <button disabled={isDisabled} onClick={toggle}>
      {children}
    </button>
  );
};
