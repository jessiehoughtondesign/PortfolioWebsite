import './ProjectDetail.css';

function CommitMessageProject() {
  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="container">
        <div className="text-and-image">
          <div className="project-hero-container">
            <h1 className="project-hero-title">Making Git feel effortless with AI</h1>
            <p className="project-hero-subtitle">Generating commit messages, so you don't have to</p>
          </div>
          <div className="image-frame">
            <img src="/Commit/CommitMessageHeroResized.png" alt="Commit Message Hero" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Overview</h2>
          <p className="project-text">
            As developer demand for AI assistance increased with the popularity of tools like ChatGPT and GitHub Copilot code completions, Visual Studio was exploring avenues to leverage AI to reduce toil and increase developer joy. I advocated and executed on generating commit messages because it is a task that is uniquely well-suited for AI, and the feature became a customer favorite of the GitHub Copilot feature set in Visual Studio.
          </p>
          <br />
          <h2 className="project-section-title">Role</h2>
          <p className="project-text">
            As the product lead and co-designer, I:
          </p>
          <ul className="project-list">
            <li>Identified high-impact AI opportunities by researching unarticulated customer pain points in daily developer workflows.</li>
            <li>Defined and validated the user experience through competitive benchmarking, user interviews, and telemetry analysis.</li>
            <li>Led UX iterations in partnership with designers, engineering, and content strategists to refine the commit message generation flow.</li>
            <li>Enhanced the experience with customization, ensuring flexibility while keeping interactions lightweight and intuitive.</li>
          </ul>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="container alt-bg">
        <div className="project-container">
          <h2 className="project-section-title">Challenge</h2>
          <p className="project-challenge-solution">How can we make Git feel effortless?</p>

          <h2 className="project-section-title">Solution</h2>
          <p className="project-challenge-solution">Introduce AI natively in the existing developer work flows to remove tedium</p>
          <p className="project-text">
            We built one solution leveraging AI - the ability to describe a set of changes. We then applied this with natural UX patterns to reduce the toil of writing commit messages, summarizing pull request changes, and describing previous commits.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="container">
        <div className="text-and-image">
          <div className="project-container">
            <h2 className="project-section-title">Process</h2>
            <p className="project-text">
              Collaborative research and design, with fast iteration based on customer feedback
            </p>
            <br />
            <p className="project-text">
              I conducted extensive competitive analysis, mapped existing user flows, and validated with user research to ensure we met expectations and identify where we could meet them in their existing workflow.
            </p>

            <ul className="project-list">
              <li>
                <strong>Analyzing competitor products:</strong> Leveraged insights from JetBrains Rider's public customer forums to identify common frustrations and unmet needs.
              </li>
              <li>
                <strong>Quantifying high-value interactions:</strong> Examined telemetry data on the most frequently used Git actions to prioritize impactful feature placement and mapped existing customer journeys.
              </li>
              <li>
                <strong>Gathering direct user feedback:</strong> Conducted surveys and interviews to understand how developers approached commit messages and where AI could add value.
              </li>
            </ul>
            <br />
            <p className="project-text">
              I designed high-fidelity prototypes, shipped the first version, and responded quickly to user feedback.
            </p>

            <ul className="project-list">
              <li>
                <strong>Crafting high-fidelity prototypes in Figma:</strong> Collaborated with UX designers and engineers to define the commit message generation, pull request summarization, and describe commit flows and supported implementation.
              </li>
              <li>
                <strong>Prioritizing customization based on early feedback:</strong> Introduced a setting that allowed users to create commits that "sounded like them" or followed their repositories policies.
              </li>
              <li>
                <strong>Identifying impactful UX refinements from telemetry:</strong> Discovered from telemetry on character count that many users trimmed excessive text, leading to a UX improvement that <strong>increased suggestion acceptance from 74.5% to 87.1%.</strong>
              </li>
            </ul>
          </div>
          <div className="image-frame">
            <img src="/Commit/CustomizationOptions.png" alt="Commit Message Hero" />
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Outcome and Impact</h2>
          <p className="project-text">
            Created a fan favorite feature and set an example for other AI features
          </p>

          <p className="project-text">
            Users found this integration genuinely helpful and intuitive without disrupting their existing behaviors.
          </p>

          <ul className="project-list">
            <li>
              <strong>Raising user engagement and satisfaction for GitHub Copilot:</strong> Commit message generation became one of the most-used GitHub Copilot features in Visual Studio outside of inline completions, with <strong>nearly 20K daily invocations</strong>, supporting our strategic goals
            </li>
            <li>
              <strong>Establishing a winning pattern for AI the entire product:</strong> Other Visual Studio areas followed our example of identifying opportunities to meet customers where they are and create moments of delight with AI
            </li>
          </ul>
          <br />
          <h2 className="project-section-title">Lessons Learned</h2>
          <p className="project-text">
            Leverage natural entry points and iterate quickly
          </p>

          <ul className="project-list">
            <li>
              <strong>AI success depends on seamless integration:</strong> The best AI features feel like a natural extension of the workflow, not an added step.
            </li>
            <li>
              <strong>Responsive iteration is critical:</strong> Combining telemetry with direct feedback helped refine AI interactions quickly and effectively.
            </li>
            <li>
              <strong>Customization drives adoption:</strong> Providing users with lightweight control options improved satisfaction without overcomplicating the UX.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CommitMessageProject;
