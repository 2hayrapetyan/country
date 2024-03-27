/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header({ onInputChange, onInputFocus }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    onInputChange(value);
  };

  const handleInputFocus = (event) => {
    onInputFocus(event.type === "focus");
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      handleInputFocus(false);
    }, 300);
  };

  return (
    <header>
      <Link to='/'>
        <p className='logo'>LOGO</p>
      </Link>
      <div>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        >
          Search for Country
        </Input>
        <Button primary>Search</Button>
      </div>
    </header>
  );
}
