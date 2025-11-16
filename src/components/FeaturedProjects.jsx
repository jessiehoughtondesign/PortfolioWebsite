import './FeaturedProjects.css';
import { Link } from 'react-router-dom';

function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Copilot Chat, can you remember...?",
      role: "Product Design",
      company: "Visual Studio Copilot Chat",
      description: "Adding memories to customize while you chat",
      image: "/Memories/MemoriesHero.png",
      page: "memories"
    },
    {
      id: 2,
      title: "Making Git feel effortless with AI",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Generating commit messages, so you don't have to",
      image: "/Commit/CommitMessageHero.png",
      page: "commitmessage"
    },
    {
      id: 3,
      title: "A picture is worth a thousand words",
      role: "PM and Design",
      company: "Visual Studio Copilot Chat",
      description: "Enabling brand new workflows with image context",
      image: "/Vision/VisionHero.png",
      page: "vision"
    },
    {
      id: 4,
      title: "I can do every step of my workflow in VS",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Keeping developers in the flow with PRs in their IDE",
      image: "/PullRequests/PullRequestHero.png",
      page: "pullrequests"
    }
  ];

  return (
    <section className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/portfolio/${project.page}`} className="project-card-link">
            <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-company">{project.company}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
