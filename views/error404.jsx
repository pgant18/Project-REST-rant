const React = require('react')
const Def = require('./default')

//Creating stub function for the error page

function error404() {
    return (
        <Def>
            <main>
                <h1> 404: PAGE NOT FOUND </h1>
                <p> Oops, sorry, we can not find this page!</p>
                <img src="/images/owl.jpg" alt="Owl" />
                <div>
                        Photo by <a href="https://unsplash.com/@fer_nando">Fer Nando</a> on <a href="https://unsplash.com/photos/olLZZrm2bdg">Unsplash</a>
                    </div>
            </main>
        </Def>
    )
}

module.exports = error404