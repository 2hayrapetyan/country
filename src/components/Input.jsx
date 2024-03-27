/* eslint-disable react/prop-types */
import "./styles/input.css";

export default function Input({ value, onChange, onBlur, onFocus, children }) {
  return (
    <>
      <input
        type='text'
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={children}
      />
    </>
  );
}
