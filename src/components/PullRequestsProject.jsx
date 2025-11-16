import './ProjectDetail.css';

function PullRequestsProject() {
  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="container">
        <div className="text-and-image">
          <div className="project-hero-container">
            <h1 className="project-hero-title">I can do my entire workflow in VS</h1>
            <p className="project-hero-subtitle">Keeping developers in the flow with Pull Requests in their IDE</p>
          </div>
          <div className="image-frame">
            <img src="/PullRequests/PullRequestHero.png" alt="Pull Requests Hero" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Overview</h2>
          <p className="project-text">
            As Visual Studio 2022 embraced Git as the new default version control system, the previous tooling was overhauled and the previous pull request extensions for both GitHub and Azure DevOps were no longer compatible. Customer sentiments were strongly in favor of returning the functionality to the product, so I strategized a series of incremental releases with increasing customer value to deliver on this customer need and competitive feature set.
          </p>
          <br />
          <h2 className="project-section-title">Role</h2>
          <p className="project-text">
            As the product lead, I:
          </p>
          <ul className="project-list">
            <li>Synthesized historical research, competitive analysis, and modern customer pain points into a cohesive product vision and phased delivery plan</li>
            <li>Leveraged detailed customer journeys as a communication tool to influence the broader team and leadership</li>
            <li>Conducted multi-modal user research to validate hypotheses and prioritize features</li>
            <li>Partnered with UX designer to create wireframes and prototypes</li>
            <li>Partnered with engineering to break down feature dependencies, ensuring smooth, iterative releases without disrupting existing workflows</li>
          </ul>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="container alt-bg">
        <div className="project-container">
          <h2 className="project-section-title">Challenge</h2>
          <p className="project-challenge-solution">How can we reduce context switching while working on Pull Requests?</p>

          <h2 className="project-section-title">Solution</h2>
          <p className="project-challenge-solution">Integrate the core Pull Request experience into Visual Studio</p>
          <p className="project-text">
            We strategically integrated the most important parts of the pull request workflow in to Visual Studio. I had to justify and plan this carefully as the total volume of investment spanned several sprints worth of effort.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Process</h2>
          <p className="project-text">
            Carefully design each iteration of the release to feel connected and valuable
          </p>
          <div className="image-frame">
            <img src="/PullRequests/MindMap.png" alt="Mind map" />
          </div>
          <h3 className="project-subsection-title">Identifying the main opportunities for reading the pull request experience</h3>
          <p className="project-text">
            To better understand the priority of pull requests against our other top-voted feedback tickets in version control, I did a mix of qualitative (interviews, forum feedback) and quantitative (in-product surveys, 2,000+ responses) research.
          </p>
          <ul className="project-list">
            <li>
              The rankings and verbatims reinforced the signal and revealed users wanted pull requests in Visual Studio to minimize context switching, leverage the power of the editor, and regain the functionality they missed from previous versions
            </li>
            <li>
              An interactive mind mapping exercise helped me better understand the exact places in their existing workflow where they suffered from context switching. We also identified the best opportunities for improvement (in green) which further reinforced create pull requests.
            </li>
          </ul>
          <div className="text-and-image">
            <div className="image-frame">
              <img src="/PullRequests/AuthorFlow.png" alt="Author Flow" />
            </div>
            <div className="image-frame">
              <img src="/PullRequests/AuthorFlow.png" alt="Reviewer Flow" />
            </div>
          </div>
          <h3 className="project-subsection-title">Breaking the experience down into an author flow and reviewer flow</h3>
          <p className="project-text">
            From the initial research and dogfooding, I developed problem hypotheses which I validated in follow-up surveys and interviews.
          </p>
          <ul className="project-list">
            <li>
              <strong>H1: In creating/authoring,</strong> users disliked navigating between the browser and VS to resolve comments, using the browser UI to create a PR, and waiting on reviewers/needing to check email and other channels for status updates.
            </li>
            <li>
              <strong>H2: In reviewing,</strong> users disliked not having enough context for their review, needing to switch to the browser from VS, and browsing through too many code changes
            </li>
            <li>
              I translated them to customer requirements for create PR, viewing comments in your editing space, viewing a summary of changes (Summary diff), rich code navigation, and one click checkout of the PR to your machine (creating safe and easy separation between coding contexts - coding vs review mode)
            </li>
            <li>
              In a customer journey map I visualized the flows for pull request authors and reviewers, identifying pain points, workarounds, and benchmarking against the competitor products. This proved helpful in communicating the opportunities and understanding the entire complexity of the feature end to end.
            </li>
            <li>
              For example, users had extreme work-arounds like having "separate branches when reviewing, so we keep that in mind"
            </li>
          </ul>
          <div className="text-and-image">
            <div className="image-frame">
              <img src="/PullRequests/AlternativeNotes.png" alt="Notes" />
            </div>
            <div className="image-frame">
              <img src="/PullRequests/Alternatives.png" alt="Alternatives" />
            </div>
          </div>
          <h3 className="project-subsection-title">Building from the past and constantly improving</h3>
          <p className="project-text">
            Translating these requirements into visuals, my design partner and I took inspiration from competitors and the previous experience. We conducted usability testing to refine the experience, leveraging direct user feedback to shape final designs. Feedback showed:
          </p>
          <ul className="project-list">
            <li>Each concept solved the primary pain point of going to the browser, and when ranked against each other users didn't have strong preferences. This meant we had more flexibility in how to implement it</li>
            <li>Having the code changes in the view was very important</li>
            <li>A notification entry point was a great opportunity to encourage more adoption of the feature</li>
          </ul>

          <p className="project-text">
            I created high-fidelity UX flows, included variants to address technical constraints the first version, and tuned the error state text
          </p>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="container alt-bg">
        <div className="project-container">
          <h2 className="project-section-title">Outcome and Impact</h2>
          <p className="project-text">
            Defined the roadmap for a high complexity feature, fostering engagement, and opening the door for AI integrations
          </p>

          <p className="project-text">
            I worked closely with engineering to align technical feasibility with UX goals, ensuring a seamless integration and shipped the feature
          </p>

          <ul className="project-list">
            <li><strong>11K+ active users</strong> creating pull requests in the first year, driving engagement among Visual Studio's core GitHub user base</li>
            <li>Increased GitHub user engagement, a key business priority.</li>
            <li>High user satisfaction and positive reception from the developer community</li>
            <li>Paved the pathway for AI features that fit into the pull request workflows like controlling agentic flows and getting AI comments</li>
          </ul>
          <br />
          <h2 className="project-section-title">Lessons Learned</h2>
          <p className="project-text">
            Leverage research to prioritize amongst complexity
          </p>

          <ul className="project-list">
            <li>
              <strong>Data-Driven Prioritization:</strong> Combining qualitative and quantitative insights (e.g., card sorting + surveys) clarified the most valuable features to ship first.
            </li>
            <li>
              <strong>Managing Complexity:</strong> Shipping incrementally required deep collaboration with engineering to navigate interdependencies and trade-offs.
            </li>
            <li>
              <strong>Targeted Research:</strong> Understanding user flows enabled more precise survey targeting through telemetry, leading to more representative findings.
            </li>
          </ul>

          <blockquote className="project-testimonial">
            "You did research and benchmarking on how other tools e.g. VS Code is handling the similar problems that we were facing. With all the context you had gathered from the problem space <strong>you were able to critique my designs from many altitudes</strong>. Providing feedback from a higher level, how the design pieces fit in the VS architecture and how they work together. But also give more focused feedback related to different user scenarios and jobs to be done. Every time we met you <strong>brought clarity to my design process</strong> and I was able to narrow down different options. It truly was a co-design effort and I couldn't have done it without your help."
            <footer>— Testimonial from my design partner</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default PullRequestsProject;
