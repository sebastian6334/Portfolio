import { useState } from "react";
import "./select-language.styles.scss";
import engIcon from "./../../assets/eng.png";
import plIcon from "./../../assets/plflag.svg";
import { useTranslation } from "react-i18next";

const SelectLanguage = () => {
  const [isPolish, setIsPolish] = useState(true);

  const toggleFlag = () => {
    setIsPolish(!isPolish);
    i18n.changeLanguage(!isPolish ? "pl" : "en");
  };
  const { i18n } = useTranslation();

  return (
    <div className="select-language" onClick={toggleFlag}>
      <img
        src={isPolish ? plIcon : engIcon}
        alt={isPolish ? "Polski" : "English"}
      />
    </div>
  );
};

export default SelectLanguage;
