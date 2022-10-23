import React, { memo } from "react";
import "./selectedLang.css";

const languages = ["All", "Javascript", "Ruby", "CSS", "Python", "Java"];

const SelectedLang = memo(({ selectLang, selectedLang, loading }) => {
  return (
    <ul className='lang-container'>
      {languages.map((lang) => (
        <li
          className={loading ? "disable" : undefined}
          onClick={() => !loading && selectLang(lang)}
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
