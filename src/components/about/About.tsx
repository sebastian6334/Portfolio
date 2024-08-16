import React from "react";
import "./about.styles.scss";
import github from "./../../assets/github.svg";
import linkedin from "./../../assets/linkedin.svg";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="home" className="container">
        <main className="main">
          <div className="profile">
            <div className="title-container">
              <h1 className="title">{t("_common:about.title")}</h1>
            </div>

            <h3 className="sub-title">Front-end Developer</h3>

            <div className="description-container">
              <p className="description">{t("_common:about.description")}</p>
            </div>
            <button className="contact-button">
              {t("_common:about.buttonContact")}
            </button>
          </div>

          <div className="social-links">
            <div className="emoji-container">
              <div className="emoji">👋</div>
            </div>
            <a
              href="https://www.linkedin.com/in/sebastian-trupinda-751489252/"
              className="social-link"
            >
              <img src={linkedin} alt="linkedIn" />
            </a>
            <a href="https://github.com/sebastian6334" className="social-link">
              <img src={github} alt="github" />
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
