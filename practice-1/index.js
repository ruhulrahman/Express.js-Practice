var express = require('express')
var app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Home Page!')
})

app.get('/about', (req, res) => {
    res.send('About Page!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page!')
})

app.get('/mission', (req, res) => {
    res.send('Mission Page!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})