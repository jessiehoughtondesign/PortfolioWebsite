import './ProjectDetail.css';

function MemoriesProject() {
  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="container">
        <div className="text-and-image"> 
          <div className="project-hero-container">
            <h1 className="project-hero-title">Copilot Chat, can you remember...?</h1>
            <p className="project-hero-subtitle">Adding memories to customize <em>while you chat</em></p>
          </div>
          <div className="image-frame">
            <img src="/Memories/MemoriesHero.png" alt="Copilot Chat Memories Hero" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Overview</h2>
          <p className="project-text">
            Developers were frustrated with Copilot Chat since it made the same mistakes over. This didn't match up with user expectations for a smart tool that could learn and grow through repeated usage - even though, in reality, LLMs are stateless and persistent context must be carefully managed manually. I created Copilot memories, a capability to detect preferences and save them, solving the user need and documenting their preferences in the appropriate project files.
          </p>
          <br />
          <h2 className="project-section-title">Role</h2>
          <p className="project-text">
            As the product and design lead, I:
          </p>
          <ul className="project-list">
            <li>Identified the proper scope of the project to learn from based on competitor research and user testing</li>
            <li>Designed for enterprise control and large teams</li>
            <li>Created several flows and variants, nailing language and interactions - adding a new system message component that expands the current chat toolkit</li>
            <li>Navigated the complexity of this emerging paradigm with deep partnership with engineering</li>
            <li>Worked as the sole designer with two engineering teammates</li>
          </ul>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="container alt-bg">
        <div className="project-container">
          <h2 className="project-section-title">Challenge</h2>
          <p className="project-challenge-solution">How can we deliver the best Copilot Chat experiences, tailored to each team's preferences?</p>

          <h2 className="project-section-title">Solution</h2>
          <p className="project-challenge-solution"> As users prompt, automatically detect and document team preferences to fuel more customized, accurate future responses</p>
          <p className="project-text">
            I designed a simple interaction to remember project preferences while the user is naturally interacting with Copilot. The feature trains users to customize their Copilot experience by supporting them in documenting their explicit preferences, benefitting both Copilot and the team. The model works well for enterprises who may impose guidelines on their developers and also want explicit control on what gets added to their documentation.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Process</h2>
          <p className="project-text">
            Validated the scope, designed for enterprises, and partnered deeply with engineering to understand technical complexity and ensure quality
          </p>
          <br />
          <h3 className="project-subsection-title">Research</h3>
          <p className="project-text">
            I investigated the competitive landscape and leveraged user testing to get the correct scope and user requirements
          </p>
          <ul className="project-list">
            <li>
              <strong>Benchmarking competitor concepts for memories:</strong> Noticed that competitors like Cursor, Windsurf, and Cline had divergent experiences, giving us more flexibility since we didn't have to follow an emerging industry standard or trend
            </li>
            <li>
              <strong>User testing to land on scope and get enterprise requirements:</strong> Found that customers saw more value in getting project-level preferences saved rather than user-level preferences. Also, noted that enterprises demanded a high level of control since the feature would modify documentation on their behalf
            </li>
          </ul>
          <br />
          <h3 className="project-subsection-title">Design & Development</h3>
          <p className="project-text">
            I created variants on the UX flows and dialed in the language for how to introduce the feature with clarity, leaning heavily on engineering engagement and dogfooding to get feedback
          </p>
          <ul className="project-list">
            <li>
              <strong>Creating the UX flows and a new component:</strong> Identified a gap in our current chat components when creating the designs. I defined a new system message called the nudge UI which has an ephemeral state by works well for use case beyond the memories feature.
            </li>
            <li>
              <strong>Iterating on string clarity:</strong> Worked with content designers to revise the memories text in response to confusion during usability testing
            </li>
            <li>
              Engaging engineering for dogfooding feedback: Since the engineering team uses the product to build the product, I tapped into the fast insights I can get from tight partnership.
            </li>
          </ul>
          <br />
          <h3 className="project-subsection-title">Launch & Iteration</h3>
          <p className="project-text">
            I worked closely with the engineer in charge of implementation to test the UX and quality of responses and monitored external feedback for opportunities to expand the feature further.
          </p>
          <ul className="project-list">
            <li>
              <strong>Monitoring customer feedback:</strong> Considered new scope expansions to cover customer requests for connection to custom instructions and user-level project preferences
            </li>
            <li>
              <strong>Running through key test scenarios and sharing feedback during development:</strong> I tested the repository on the development branch to provide early UX feedback and ensure follow through on the design specifications
            </li>
          </ul>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="container">
        <div className="project-container">
          <h2 className="project-section-title">Outcome and Impact</h2>
          <p className="project-text">
            Enabled natural customization, set up learnings for future AI context management projects, and expanded the design system
          </p>
          <p className="project-text">
            Users are just starting to adopt the feature after its initial ship, but we've already received positive feedback on managing context.
          </p>

          <ul className="project-list">
            <li>
              <strong>Following best practices for smart systems:</strong> Created a system that can subtly learn from user behavior, better matching with user expectations
            </li>
            <li>
              <strong>Setting up learnings:</strong> Shipped a scoped version in a short time to enable quick learnings and iterations on both the memory system and new nudge UI system message.
            </li>
            <li>
              <strong>Adding new system messages to the design toolkit:</strong> Evolved the toolkit with a new component and set clear guidelines for appropriate usage. Enabled lots of interesting future features that can trigger on heuristics and teach users about new features.
            </li>
          </ul>
          <br />
          <h2 className="project-section-title">Lessons Learned</h2>
          <p className="project-text">
            Navigating new AI paradigms requires flexibility and deep partnership
          </p>
          <ul className="project-list">
            <li>
              <strong>AI is evolving rapidly so shipping to learn is a must:</strong> Some things in the AI space seem to solidify into industry standards, but not everything falls into that bucket. There's plenty of room for rapid iteration and true innovation as this paradigm continues to evolve. Additionally, newer models may change what is even possible
            </li>
            <li>
              <strong>Involving engineering early in the design process can help clarify technical challenges:</strong> Understanding constraints enables us to design more creatively.
            </li>
            <li>
              <strong>Be willing to pivot:</strong> Assumptions can flip once a feature has actually shift and designing variants helps enable faster update loops
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MemoriesProject;
