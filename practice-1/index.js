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
    res.redirect('http://localhost:3000/bangladesh')
})

app.get('/bangladesh', (req, res) => {
    res.send('Bangladesh Mission Page!')
})

app.get('/vission', (req, res) => {
    res.status(401).end("Unauthorize")
})

app.get('/list', (req, res) => {
    let data = [
        {
            name: 'Ruhul',
            city: "Natore"
        },
        {
            name: 'Rasel',
            city: "Rajshahi"
        },
        {
            name: 'Habib',
            city: "Dhaka"
        }
    ]
    res.json(data)
})

app.get('/file-download', (req, res) => {
    res.download('./uploads/ruhul.jpg')
})

app.get('/header', (req, res) => {
    res.append('username', 'ruhulrahman')
    res.append('password', '123456')
    res.status(201).end('Response Body msg')
})

app.get('/cookie', (req, res) => {
    res.cookie('name', 'Ruhul')
    res.cookie('city', 'Natore')
    res.cookie('age', '27')
    res.status(201).end('Cookie added')
})

app.get('/clear-cookie', (req, res) => {
    res.clearCookie('city')
    res.clearCookie('age')
    res.status(201).end('Cookie Clear')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})