import React from "react";

const buttonTypes = ["default", "primary", "secondary"] as const;

type ButtonType = (typeof buttonTypes)[number];

interface ButtonProps extends Omit<HTMLButtonElement, "type"> {
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  type = "default",
  children,
}) => {
  return <button className={`button button-${type}`}>{children}</button>;
};
