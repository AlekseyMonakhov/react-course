import React, { memo } from "react";
import "./selectedLang.css";

const languages = ["All", "Javascript", "Ruby", "CSS", "Python", "Java"];

const SelectedLang = memo(({ selectLang, selectedLang }) => {
  console.log("lang render");
  return (
    <ul className="lang-container">
      {languages.map((lang) => (
        <li
          onClick={() => selectLang(lang)}
          style={selectedLang === lang ? { color: "orange" } : null}
          key={lang}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
});

export default SelectedLang;
