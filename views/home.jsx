const React = require('react')
const Def = require('./default')

// Creating a home stub
function home () {
    return (
        <Def>
            <main>
                <h1> HOME </h1>
            </main>
        </Def>
    )
}

module.exports = home