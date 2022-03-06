import React from 'react'
import { Link } from "gatsby"

export default function Page({children}) {
    return (
        <div className="container mx-auto max-w-5xl p-10">
            <title>Lorey Ventures</title>
            <div className="text-center">
                <div className="text-gray-700" style={{'font-size': '1000%', 'line-height': '100%'}}>
                    <Link to="/" className="font-normal hover:no-underline">LV</Link>
                </div>
                <h1 className="text-5xl text-gray-900 font-normal">Lorey Ventures</h1>
                <p className="text-gray-400 mt-3 mb-10">
                    Lorey Ventures is the holding company of <a href="https://karllorey.com">Karl Lorey</a>.
                </p>
            </div>
            {children}
            <footer className="text-gray-400 mt-10">
                <p className="text-xs mt-4">
                    © 2022 Lorey Ventures UG (haftungsbeschränkt).<br/>
                    <a href="https://github.com/loreyventures/loreyventures.com">Source Code</a> is available on GitHub.
                </p>
            </footer>
        </div>
    )
}