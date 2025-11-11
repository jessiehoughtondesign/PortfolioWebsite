import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Copilot Chat, can you remember...?",
      role: "Product Design",
      company: "Visual Studio Copilot Chat",
      description: "Adding memories to customize while you chat",
      image: "/project-1.jpg"
    },
    {
      id: 2,
      title: "Making Git feel effortless with AI",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Generating commit messages, so you don't have to",
      image: "/project-2.jpg"
    },
    {
      id: 3,
      title: "A picture is worth a thousand words",
      role: "PM and Design",
      company: "Visual Studio Copilot Chat",
      description: "Enabling brand new workflows with image context",
      image: "/project-3.jpg"
    },
    {
      id: 4,
      title: "I can do every step of my workflow in VS",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Keeping developers in the flow with PRs in their IDE",
      image: "/project-4.jpg"
    },
    {
      id: 5,
      title: "Copilot Chat, can you remember...?",
      role: "Product Design",
      company: "Visual Studio Copilot Chat",
      description: "Adding memories to customize while you chat",
      image: "/project-1.jpg"
    },
    {
      id: 6,
      title: "Making Git feel effortless with AI",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Generating commit messages, so you don't have to",
      image: "/project-2.jpg"
    },
    {
      id: 7,
      title: "A picture is worth a thousand words",
      role: "PM and Design",
      company: "Visual Studio Copilot Chat",
      description: "Enabling brand new workflows with image context",
      image: "/project-3.jpg"
    },
    {
      id: 8,
      title: "I can do every step of my workflow in VS",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Keeping developers in the flow with PRs in their IDE",
      image: "/project-4.jpg"
    },
    {
      id: 9,
      title: "Copilot Chat, can you remember...?",
      role: "Product Design",
      company: "Visual Studio Copilot Chat",
      description: "Adding memories to customize while you chat",
      image: "/project-1.jpg"
    },
    {
      id: 10,
      title: "Making Git feel effortless with AI",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Generating commit messages, so you don't have to",
      image: "/project-2.jpg"
    },
    {
      id: 11,
      title: "A picture is worth a thousand words",
      role: "PM and Design",
      company: "Visual Studio Copilot Chat",
      description: "Enabling brand new workflows with image context",
      image: "/project-3.jpg"
    },
    {
      id: 12,
      title: "I can do every step of my workflow in VS",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Keeping developers in the flow with PRs in their IDE",
      image: "/project-4.jpg"
    },
    {
      id: 13,
      title: "Copilot Chat, can you remember...?",
      role: "Product Design",
      company: "Visual Studio Copilot Chat",
      description: "Adding memories to customize while you chat",
      image: "/project-1.jpg"
    },
    {
      id: 14,
      title: "Making Git feel effortless with AI",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Generating commit messages, so you don't have to",
      image: "/project-2.jpg"
    },
    {
      id: 15,
      title: "A picture is worth a thousand words",
      role: "PM and Design",
      company: "Visual Studio Copilot Chat",
      description: "Enabling brand new workflows with image context",
      image: "/project-3.jpg"
    },
    {
      id: 16,
      title: "I can do every step of my workflow in VS",
      role: "PM and Co-Design",
      company: "Visual Studio Version Control",
      description: "Keeping developers in the flow with PRs in their IDE",
      image: "/project-4.jpg"
    }
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h1 className="portfolio-title">My Work</h1>
          <p className="portfolio-subtitle">A collection of projects I've designed and shipped</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/portfolio/${project.id === 1 || project.id === 5 || project.id === 9 || project.id === 13 ? 'memories' : project.id}`} className="project-card-link">
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-company">{project.company}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
