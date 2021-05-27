import React from "react";

const Button = ({
  size = "md",
  color = "default",
  text = "Default",
  variant = "",
  disableShadow,
  disabled,
  startIcon = "",
  endIcon = "",
}) => {
  const style = `${size} card__btn color-${color} ${variant} ${
    disableShadow ? "disable-shadow" : ""
  } ${disabled ? "disabled" : ""}`;
  return (
    <button className={style}>
      {startIcon} {text} {endIcon}
    </button>
  );
};

export default Button;
