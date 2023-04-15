import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [project, setProject] = useState([]);
  const [showProjectDetail, setShowProjectDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function getProjectsData() {
    setIsLoading(true);
    try {
      const { data, status, message } = await fakeFetch(
        "https://example.com/api/projects"
      );
      if (status === 200 && message === "Success") {
        setProject(data.projects);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProjectsData();
  }, []);
  const showDetails = (title) => {
    const showProductDetails = project.filter(
      (projectInfo) => projectInfo.title === title
    );
    setShowProjectDetail(showProductDetails);
  };
  return (
    <div>
      <h1>Projects</h1>
      <p>{isLoading && "Loading Projects...."}</p>
      {project.map(({ title, description, technologies, completed }) => (
        <div>
          <b>Name: </b>
          {title}
          <br />
          <b>Description: </b>
          {description}
          <br />
          <button onClick={() => showDetails(title)}>Show Details</button>
          <br />
          <br />
        </div>
      ))}

      {showProjectDetail.map(
        ({ title, description, technologies, completed }) => (
          <div>
            <h1>Project Details</h1>
            <b>Title: </b>
            {title}
            <br />
            <b>Description: </b>
            {description}
            <br />
            <b>Technologies: </b>
            {technologies}
            <br />
            <b>Completed: </b>
            {`${completed}`}
            <br />
          </div>
        )
      )}
    </div>
  );
}
