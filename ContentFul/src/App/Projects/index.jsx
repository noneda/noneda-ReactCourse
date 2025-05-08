import { useProjects } from "../../Hooks";
import Items from "./Items";

const Projects = () => {
  const [items] = useProjects();
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline" />
      </div>
      <div className="projects-center">
        {items.map((e) => (
          <Items {...e.fields} key={e.sys.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
