import React from "react";
import "./title-component.styles.scss";
interface TitleComponentProps {
  title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <div className="title-component-overlay">
      <h1 className="title-component-text">{title}</h1>
    </div>
  );
};

export default TitleComponent;
