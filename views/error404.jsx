const React = require('react')
const Def = require('./default')

//Creating stub function for the error page

function error404() {
    return (
        <Def>
            <main>
                <h1> 404: PAGE NOT FOUND </h1>
                <p> Oops, sorry, we can not find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404