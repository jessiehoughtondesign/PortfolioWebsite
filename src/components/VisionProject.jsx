import './ProjectDetail.css';

const BASE_URL = import.meta.env.BASE_URL;

function VisionProject() {
  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="container">
        <div className="text-and-image">
          <div className="project-hero-container">
            <h1 className="project-hero-title">A picture is worth a thousand words</h1>
            <p className="project-hero-subtitle">Enabling brand new workflows with image context</p>
          </div>
          <div className="image-frame">
            <img src={BASE_URL + "Vision/VisionHero.png"} alt="Vision Hero" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Overview</h2>
          <p className="project-text">
            As LLM capabilities expanded, we had opportunities to envision how developers may be able to leverage context such as images, videos, and audio to get better responses from their AI tools while writing code. I enabled Vision capabilities, opening up workflows for front-end developers to iterate more quickly and for maintainers to diagnose visual bugs and errors.
          </p>
          <br />
          <h2 className="project-section-title">Role</h2>
          <p className="project-text">
            As the product and design lead, I:
          </p>
          <ul className="project-list">
            <li>Defined the use cases for image context, ensuring mapping to real developer needs.</li>
            <li>Validated scenarios through user discovery interviews, testing assumptions about how developers wanted to use vision-based AI.</li>
            <li>Designed MVP user flows that minimized friction while accounting for technical constraints.</li>
            <li>Collaborated across teams to address partner dependencies and explore alternative solutions when initial plans were blocked.</li>
            <li>Worked with two other designers with several engineering teammates.</li>
          </ul>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="container alt-bg">
        <div className="project-container">
          <h2 className="project-section-title">Challenge</h2>
          <p className="project-challenge-solution">How can we reimagine prompting, for front-end developers?</p>

          <h2 className="project-section-title">Solution</h2>
          <p className="project-challenge-solution">Allow users to leverage images as context in Copilot Chat</p>
          <p className="project-text">
            I enabled Vision capabilities in Visual Studio GitHub Copilot Chat, opening up workflows for font-end developers to iterate more quickly and for maintainers to diagnose visual bugs and errors.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Process</h2>
          <p className="project-text">
            Designed for the "golden scenario" to maximize speed and flexibility, and partnered across organizational barriers to ensure a consistent experience and responsible rollout
          </p>
          <div className="image-frame">
            <img src={BASE_URL + "Vision/VisionProcess.png"} alt="Vision Hero" />
          </div>
          <p className="project-text">
            I identified the golden scenarios and cohorts, validated early concepts, and scoped designs to align with user expectations and identify a feasible MVP
          </p>

          <ul className="project-list">
            <li>
              <strong>Mapping key customer cohorts and scenarios:</strong> Focused on UI developers, who had complex workflows spanning multiple frameworks.
            </li>
            <li>
              <strong>Conducting discovery interviews and concept value testing:</strong> Tested early concepts with developers, finding that many were excited but unfamiliar with vision-based AI workflows. Showed proof-of-concept videos and confirmed that the ability to debug UI issues with image inputs was an additional high-priority scenario.
            </li>
            <li>
              <strong>Refining our MVP approach:</strong> Introduced the basic functionality first—getting users comfortable with multi-modal AI interactions before expanding.
            </li>
          </ul>
          <br />
          <p className="project-text">
            I created high-fidelity UX flows, included variants to address technical constraints the first version, and tuned the error state text
          </p>

          <ul className="project-list">
            <li>
              <strong>Creating the UX flows:</strong> Ensured intuitive interactions for attaching images to chat threads, addressed notifications, and fit and finish relative to other content types
            </li>
            <li>
              <strong>Addressing technical constraints:</strong> Designed a "bring your own model" (BYOM) flow variant, allowing users to connect their own vision models if needed.
            </li>
            <li>
              <strong>Iterating on messaging & UI clarity:</strong> Worked with content designers to ensure clear guidance on how image inputs differed from standard chat interactions
            </li>
          </ul>
          <br />
          <p className="project-text">
            I promoted consistency with our VS family and ensured evaluations covered the most important cases.
          </p>

          <ul className="project-list">
            <li>
              <strong>Learning from our companion product, VS Code:</strong> Incorporated design improvements to reduce configuration complexity and promote consistency across experiences
            </li>
            <li>
              <strong>Working closely with engineering:</strong> Adapted the design based on evolving technical feasibility.
            </li>
            <li>
              <strong>Defined key test scenarios:</strong> Ensured a high-quality rollout by applying the key scenarios for testing and partnering with the Responsible AI team
            </li>
          </ul>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="container alt-bg">
        <div className="project-container">
          <h2 className="project-section-title">Outcome and Impact</h2>
          <p className="project-text">
            Set the stage for customer experimentation and future AI modality innovation
          </p>

          <p className="project-text">
            Users adapted to this new modality and identified exciting and novel applications for prompting the models with images.
          </p>

          <ul className="project-list">
            <li>
              <strong>Establishing core user flows:</strong> Enabled new opportunities for integrating vision models into AI-powered developer tools.
            </li>
            <li>
              <strong>Preparing for future expansion:</strong> Created designs and plans for future innovations.
            </li>
            <li>
              <strong>Validating foundational user behaviors:</strong> Allowed the team to evolve this feature into a more seamless, native experience in subsequent updates.
            </li>
          </ul>
          <br />
          <h2 className="project-section-title">Lessons Learned</h2>
          <p className="project-text">
            Leverage natural entry points and iterate quickly
          </p>

          <ul className="project-list">
            <li>
              <strong>Early assumptions can shift rapidly:</strong> Vision AI is a new space, and user expectations evolve as they gain familiarity with the technology.
            </li>
            <li>
              <strong>Collaboration across teams is critical:</strong> Dependencies can shift, and proactive communication ensures smooth pivots.
            </li>
            <li>
              <strong>Designing for constraints sharpens solutions:</strong> The BYOM approach, while temporary, helped us explore creative alternatives that have already informed other Copilot functionality
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default VisionProject;
