//Importing React
const React = require('react')
// Creating a stub function called Def that has one parameter called html. This will include the HTML skeleton that I want on all of my pages
function Def (html) {
    return (
        <html>
            <head>
                <title> Title </title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
// Exporting the Def function
module.exports = Def