<template>
  <div class="container py-3">
    <div class="row mb-3">
      <div class="col-12 d-flex flex-column justify-content-center">
        <h1>Introduction to Webpack Module Federation</h1>
        <h3 class="text-warning">
          Webpack Module Federation enables seamless collaboration between
          JavaScript bundles at runtime (or at build time), allowing developers
          to share modules across “applications”.
        </h3>
      </div>
      <div class="col-12 d-flex justify-content-center pt-3">
        <img src="@/assets/peeps.png" alt="Hero Image" class="img-fluid" />
      </div>
      <div class="col-12 mt-3">
        <div class="card bg-dark">
          <div class="card-header">
            <h3>Relationship with Micro Frontends</h3>
          </div>
          <div class="card-body">
            <blockquote class="blockquote">
              <p class="text-info">
                The phrase "means to an end" refers to using a method or action
                as a way to achieve a desired outcome or goal.
              </p>
              <footer class="blockquote-footer">
                MF is a <span class="fs-5 text-warning">“means”</span> to the
                MFE <span class="fs-5 text-warning">“end”</span>.
              </footer>
            </blockquote>
            <pre class="code text-danger">
              <code>MF === Module Federation</code>
              <code>MFE === Micro Frontend</code>
              <code>MF !== MFE</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container pb-3">
    <div class="row">
      <div class="col-12 mb-2">
        <h4>Module Federation</h4>
        <ul class="list-group">
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Module Federation is a feature provided by webpack that allows
            different JavaScript bundles to share modules at runtime.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            It enables applications to dynamically load code from remote servers
            and integrate it seamlessly into the main application.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Module Federation enhances modularity and facilitates collaboration
            across distributed teams by allowing separate teams to develop and
            deploy their modules independently.
          </li>
        </ul>
      </div>
      <div class="col-12 mb-2">
        <h4>Micro Frontends</h4>
        <ul class="list-group">
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Micro Frontend is a design pattern for developing web applications
            as a composition of loosely coupled, independently deployable
            modules.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            It aims to break down a large, monolithic frontend application into
            smaller, self-contained applications or components, each owned by a
            separate team.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Micro Frontends promote platform-agnosticism, allowing teams to
            choose different technologies, frameworks, or even programming
            languages for their individual modules.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            The pattern enables teams to work independently, deploy updates
            without affecting other parts of the application, and scale more
            effectively.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container pb-5">
    <div class="row">
      <div class="col">
        <h4>A Benefits Breakdown</h4>
        <ul class="list-group">
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Enhanced Collaboration: Facilitates concurrent development by
            distributed teams, allowing them to work independently on
            feature-specific modules.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Scalability: Enables the application to scale effectively as new
            features and functionalities can be developed and deployed
            independently as modules.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Reduced Dependencies: Reduces dependencies between different parts
            of the application, leading to more efficient development and
            deployment processes.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Improved Maintainability: Modular architecture simplifies
            maintenance tasks by isolating changes to specific modules,
            minimizing the risk of unintended side effects.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Flexibility in Deployment: Provides flexibility in deployment
            strategies, allowing modules to be loaded dynamically at runtime or
            statically bundled during the build process.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Streamlined Development Cycles: Accelerates development cycles by
            enabling teams to focus on their specific areas of expertise and
            deliver features faster.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Autonomy: Empowers teams to make decisions independently, leading to
            faster innovation and adaptation to changing requirements.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Efficient Resource Utilization: Optimizes resource allocation by
            allowing teams to allocate resources based on the needs of their
            specific modules.
          </li>
          <li
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            Easier Testing and Debugging: Modular architecture facilitates
            easier testing and debugging as changes are localized to specific
            modules, making it easier to identify and resolve issues.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
