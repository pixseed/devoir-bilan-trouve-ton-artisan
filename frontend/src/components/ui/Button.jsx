/* Button.jsx */

import { Link } from "react-router-dom";
import clsx from "clsx";
import { VARIANTS } from "../../constants/variants";

export default function Button({
  children,
  variant = VARIANTS.BUTTON.PRIMARY,
  size = VARIANTS.SIZE.MD,
  icon: Icon,
  iconPosition = "right",
  to,
  onClick,
}) {
  const className = clsx(
    "button",
    `button--${variant}`,
    `button--${size}`
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="button__icon" />}
      <span className="button__label">{children}</span>
      {Icon && iconPosition === "right" && <Icon className="button__icon" />}
    </>
  );

  // Bouton de navigation
  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  // Bouton d'action
  return (
    <Button className={className} onClick={onClick}>
      {content}
    </Button>
  );
}
