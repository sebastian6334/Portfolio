import "./projects.styles.scss";
import { projectsData } from "./ProjectsDate";
import github from "./../../assets/github.svg";
import TitleComponent from "../titleComponent/TitleComponent";

export interface Project {
  title: string;
  description: string;
  imgSrc: string;
  githubLink: string;
}

const ProjectCard = ({ title, description, imgSrc, githubLink }: Project) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="project-card-content">
        <div className="project-card-title">{title}</div>
        <p className="project-card-description">{description}</p>
        <div className="project-card-icons">
          <a href={githubLink} className="icon-link">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="project-container">
      <div className="shadow-overlay">
        <TitleComponent title={"Projects"} />
      </div>
      <div className="skills-container">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
