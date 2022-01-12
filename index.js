require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    console.log('Server is live')
    res.send('hello world')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>oh no 404 error?</h1>')
})

app.listen(process.env.PORT)

