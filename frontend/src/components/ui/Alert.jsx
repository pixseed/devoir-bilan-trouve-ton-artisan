/* Alert.jsx */

import clsx from "clsx";
import { VARIANTS } from "../../constants/variants";

export default function Alert({ message = "", variant = VARIANTS.ALERT.INFO }) {
  return (
    <div
      className={clsx("alert", `alert--${variant}`)}
      role={variant === VARIANTS.ALERT.ERROR ? "alert" : "status"}
    >
      <p className="alert__text">{message}</p>
    </div>
  );
}
