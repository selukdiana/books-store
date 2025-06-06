import classNames from "classnames";
import "./Button.css";
import { type IButtonProps } from "../../types/props";

export const Button = ({
  onClick,
  type,
  children,
  size = "s",
}: IButtonProps) => {
  const btnClass = classNames({
    btn: true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": size === "s",
    "btn--medium": size === "m",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
