//Importing React
const React = require('react')
// Creating a stub function called Def that has one parameter called html. This will include the HTML skeleton that I want on all of my pages
function Def (html) {
    return (
        <html>
            <head>
                <title> Title </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
// Exporting the Def function
module.exports = Def