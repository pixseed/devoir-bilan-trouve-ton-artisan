/* Alert.jsx */

export default function Alert({message = "", variant = "info"}) {
    return (
        <div className={`alert alert--${variant}`} role={variant === "error" ? "alert" : "status"}>
            <p className="alert__text">{message}</p>
        </div>
    );
}