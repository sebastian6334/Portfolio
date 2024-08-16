import TitleComponent from "../titleComponent/TitleComponent";
import "./skills.styles.scss";
import { skillsData } from "./skillsData";

const SkillsComponent = () => {
  return (
    <div id="skills">
      <TitleComponent title={"Skills"} />
      <div className="skills-container">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.imgSrc} alt={skill.title} />
              <div className="skill-title">{skill.title}</div>
              <div className="skill-description">{skill.description}</div>
              <div className="skill-experience">{skill?.experience}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
