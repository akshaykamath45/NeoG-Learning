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

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/projects") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            projects: [
              {
                title: "E-commerce Website",
                description:
                  "A fully functional e-commerce website with shopping cart and checkout functionality.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                completed: false,
              },
              {
                title: "Weather App",
                description:
                  "A web application that displays the current weather and forecast for a given location.",
                technologies: ["React", "Node.js", "OpenWeatherMap API"],
                completed: true,
              },
              {
                title: "Task Manager",
                description:
                  "A web application that allows users to create, manage and track tasks.",
                technologies: ["Vue.js", "Firebase"],
                completed: false,
              },
              {
                title: "Blog Website",
                description:
                  "A blog website that allows users to create, read, update and delete blog posts.",
                technologies: ["React JS", "MongoDB"],
                completed: true,
              },
              {
                title: "Mobile Game",
                description:
                  "A mobile game developed for iOS and Android platforms.",
                technologies: ["Unity", "C#"],
                completed: false,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Projects not found.",
        });
      }
    }, 2000);
  });
};
