/* eslint-disable react/prop-types */
import "./styles/button.css";

export default function Button({ children, primary, secondary }) {
  return (
    <>
      <button
        className={`${primary ? "primary" : ""} ${
          secondary ? "secondary" : ""
        }`}
      >
        {children}
      </button>
    </>
  );
}
