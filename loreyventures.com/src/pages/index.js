import * as React from "react"

// data

// markup
const IndexPage = () => {
  return (
      <main className="container mx-auto max-w-4xl p-10">
          <title>Lorey Ventures</title>
          <div className="text-center">
              <div className="text-gray-700" style={{'font-size': '1000%', 'line-height': '100%'}}>LV</div>
              <h1 className="text-5xl text-gray-900 font-normal">Lorey Ventures</h1>
              <p className="text-gray-400 my-10">
                  Lorey Ventures is the holding company of <a href="https://karllorey.com">Karl Lorey</a>.
              </p>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-5 text-gray-400">
              <div className="mt-5">
                  <h3 className="my-2">About</h3>
                  <p className="mb-3">
                      Lorey Ventures focuses on data-driven business models and projects with a particular focus on Venture Capital and venture-backed startups.
                  </p>
                  <p>
                      Find us <br/>
                      on <a href="https://github.com/loreyventures">GitHub</a>
                      <br/>
                      or on <a href="https://www.linkedin.com/company/lorey-ventures/">Linkedin</a>.
                  </p>
              </div>
              <div className="mt-5">
                  <h3 className="my-2">Portfolio</h3>
                  <p className="mb-5">Ventures we've backed or have been actively involved in.</p>
                  <ul className="space-y-3">
                      <li><a href="https://firstmomentum.vc" rel="nofollow">First Momentum</a>: Pre-Seed Venture Capital Fund</li>
                      <li><a href="https://programmermap.com">Programmer Map</a>: Global programmer, technology, and project rankings</li>
                      <li><a href="https://germanitjobs.com">German IT Jobs</a>: International Recruiting Platform</li>
                  </ul>
              </div>
              <div className="mt-5">
                  <h3 className="my-2">Clients</h3>
                  <p className="mb-5">A selection of clients we've done project-based work for.</p>
                  <ul className="list-disc list-outside ml-4">
                      <li><a href="https://partscloud.com">PartsCloud</a>: leading product and tech for a venture-backed, pre-seed logistics startup.</li>
                      <li><a href="https://uni-stuttgart.de">University of Stuttgart</a>: building a data-driven process for startup scouting.</li>
                      <li><a href="https://smart.com">Smart Europe</a>: leading requirements engineering for CRM, CDM, and GDPR.</li>
                  </ul>
              </div>
          </div>
          <footer className="text-gray-400 mt-10">
              <p className="text-xs mt-4">
                  © 2022 Lorey Ventures UG (haftungsbeschränkt). <a href="https://karllorey.de/impressum" className="text-gray-400">Imprint</a>.<br/>
                  Source Code is available on GitHub.
              </p>
          </footer>
      </main>
  )
}

export default IndexPage
