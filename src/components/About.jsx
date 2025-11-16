import './About.css';

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="container text-and-image">
        {/* Text */}
        <div>
          <h1 className="about-hero-title">Welcome!</h1>
          <p>
            I'm a product designer who empowers. If an idea can make your life easier, I want to bring it to life - while ensuring it's intuitive, beautiful, and accessible.
          </p>
          <p>
            I love getting to the heart of problems. Tapping into my experience as a Microsoft product manager and Computer Science grad, my designs involve layered considerations for both strategic vision and technical feasibility. I bridge the gap from ambitious design to production-ready solutions, and I'm proficient at all layers of the process.
          </p>
        </div>
        {/* Image */}
        <div className="image-frame">
          <img src="/about-hero.jpg" alt="Jessie Houghton" />
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="about-details">
        <div className="about-details-container">
          <div className="about-column">
            <h2 className="about-section-title">Work Experience</h2>
            
            <div className="experience-item">
              <h3 className="experience-company">Developer Division Product Teams</h3>
              <p className="experience-location">Microsoft, Redmond, WA | 2020 - Present</p>
              <ul className="experience-list">
                <li><strong>Visual Studio Product Manager</strong> | 2022 - Present</li>
                <li><strong>ML.NET Project Manager Intern</strong> | 2021</li>
                <li><strong>Visual Studio Software Engineer/Product Manager Intern</strong> | 2020</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3 className="experience-company">University of Michigan</h3>
              <p className="experience-location">Ann Arbor, MI | 2019 - 2022</p>
              <ul className="experience-list">
                <li><strong>Lifelong Learning Lab Design and Programming Research Assistant</strong> | 2022</li>
                <li><strong>Computing Education Research Design and Programming Research Assistant</strong> | 2021</li>
                <li><strong>EECS 280: Programming and Intro Data Structures Instructional Aide</strong> | 2019 - 2022</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3 className="experience-company">entigenlogic™ (NLP and AI startup)</h3>
              <p className="experience-location">Schaumburg, IL | 2019</p>
            </div>
          </div>

          <div className="about-column">
            <h2 className="about-section-title">Education</h2>
            <div className="education-item">
              <h3 className="education-degree">B.S. Computer Science</h3>
              <p className="education-school">University of Michigan | Spring 2022</p>
            </div>
            <div className="education-item">
              <h3 className="education-degree">Minor in User Experience Design</h3>
              <p className="education-school">STAMPS School of Art and Design</p>
            </div>

            <h2 className="about-section-title skills-title">Skills</h2>
            <div className="skills-section">
              <div className="skill-category">
                <h4 className="skill-label">Design:</h4>
                <p className="skill-list">UX Research - Interaction Design - Agile Development - Journey Mapping - Information Architecture - Wireframing - Prototyping - Usability Testing - Data Analysis</p>
              </div>
              <div className="skill-category">
                <h4 className="skill-label">Software:</h4>
                <p className="skill-list">Figma - Adobe XD - Balsamiq - Camtasia - HTML - CSS - JS - C++ - C# - Python - KQL - Visual Studio - VS Code - GitHub - Microsoft Teams and M365</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
