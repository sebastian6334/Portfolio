import "./contact-form.scss";
import TitleComponent from "../titleComponent/TitleComponent";
import emailIcon from "./../../assets/email.svg";
import githubIcon from "./../../assets/github.svg";
import linkedInIcon from "./../../assets/linkedin.svg";

const ContactForm = () => {
  return (
    <div id="contact" className="contact-container">
      <TitleComponent title={"Contact Me"} />

      <div className="contact-links">
        <p className="contact-description">
          If you have any questions, comments, or just want to say hello, please
          don't hesitate to reach out. I'd love to hear from you!
        </p>
        <div className="contact-elements">
          <a href="mailto:strupinda@gmail.com">
            <div className="contact-link">
              <img src={emailIcon} alt={"e-mail"} />
              e-mail
            </div>
          </a>

          <a href="https://github.com/sebastian6334">
            <div className="contact-link">
              <img src={githubIcon} alt={"github"} />
              github
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sebastian-trupinda-751489252/">
            <div className="contact-link">
              <img src={linkedInIcon} alt={"linkedin"} />
              linkedIn
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
