import * as React from "react"

// data

// markup
const IndexPage = () => {
  return (
      <main className="container mx-auto p-10 text-center">
          <title>Lorey Ventures</title>
          <div className="text-gray-700" style={{'font-size': '1000%', 'line-height': '100%'}}>LV</div>
          <h1 className="text-5xl text-gray-900">Lorey Ventures</h1>
          <p className="text-gray-400 my-10">
              Lorey Ventures is the holding company of <a href="https://karllorey.com">Karl Lorey</a>.
          </p>
          <footer className="text-gray-400 mt-10">
              <p>
                  Find us <br/>
                  on <a href="https://github.com/loreyventures">GitHub</a>
                  <br/>
                  or on <a href="https://www.linkedin.com/company/lorey-ventures/">Linkedin</a>.
              </p>
              <p className="text-xs mt-4">
                  © 2022 Lorey Ventures UG (haftungsbeschränkt).<br/>
                  Source Code is available on GitHub.
              </p>
          </footer>
      </main>
  )
}

export default IndexPage
