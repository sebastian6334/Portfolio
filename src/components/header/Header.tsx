import { useEffect, useState } from "react";
import "./header.styles.scss";
import { headerData } from "./headerData";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const { t } = useTranslation();
  const sectionsWIP = ["home", "projects"];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  const handleScrollSelected = () => {
    const sections = ["skills", "home", "projects", "contact"];

    let foundId = "";

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom > 300) {
          foundId = id;
        }
      }
    });
    if (foundId && foundId !== currentSection) {
      setCurrentSection(foundId);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSelected);
    handleScrollSelected();

    return () => {
      window.removeEventListener("scroll", handleScrollSelected);
    };
  }, [currentSection]);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <p className="logo">👋 STrupinda.dev</p>
      <nav>
        <ul className="nav-list">
          {headerData.map((item, index) => (
            <li key={index} className="nav-item">
              <a
                href={sectionsWIP.includes(item.url) ? "#" : item.url}
                className={`nav-link ${
                  currentSection === item.id ? "active" : ""
                } ${
                  sectionsWIP.includes(item.name) ? "nav-link-disabled" : ""
                }`}
                onClick={(event) => {
                  if (sectionsWIP.includes(item.name)) {
                    event.preventDefault();
                    return;
                  }
                  setCurrentSection(item.id);
                }}
              >
                {t(item.name)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
