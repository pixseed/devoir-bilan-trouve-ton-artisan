/* Divider.jsx */

export default function Divider({ orientation = "horizontal", size = "auto" }) {
  return <div className={`divider divider--${orientation} divider--${size}`}></div>;
}
