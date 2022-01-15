const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src="/images/error.png" alt="404 error" />
        </main>
    )
}

module.exports = error404