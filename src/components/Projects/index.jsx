import { Container } from "./styles";
import { Project } from "../Project";
import projectsData from "../../projects-data";

export function Projects() {
  return (
    <Container>
      <h2>projetos</h2>
      <div>
        {projectsData.projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              links={project.links}
              tags={project.tags}
              image={project.image}
            />
          );
        })}
      </div>
    </Container>
  );
}
