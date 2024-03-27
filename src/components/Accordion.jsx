/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  accordion,
  accordionHeader,
  accordionContent,
} from "./styles/accordion.module.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const decodeEntities = (html) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
  };

  return (
    <div className={accordion}>
      <div className={accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        <span> {title}</span>
        <span>
          {" "}
          {isOpen ? decodeEntities("&#11165;") : decodeEntities("&#11167;")}
        </span>
      </div>
      {isOpen && <div className={accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
