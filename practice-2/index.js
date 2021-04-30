var express = require('express')
var bodyParser = require('body-parser') // for raw json post
var multer = require('multer') // for form-data
var multer = multer()
var app = express()
var port = 3000
app.use(multer.array()) // for form-data
app.use(bodyParser.json()) // for raw json post

app.get('/', function(req, res) {
    res.send('Home page practice-2')
})

// Request get method
app.get('/home', function(req, res) {
    let first_name = req.query.first_name
    let last_name = req.query.last_name
    res.send('My name is '+ first_name + ' ' + last_name)
})

// Request get method
app.get('/header-request', function(req, res) {
    let org_name = req.header('org_name')
    let address = req.header('address')
    let connection = req.header('Connection')
    let user_agent = req.header('User-Agent')
    // res.cookie('org_name', org_name)
    // res.cookie('address', address)
    // res.clearCookie('org_name')
    // res.clearCookie('address')
    res.send('Organization name is '+ org_name + ' and address is ' + address + '. My connection is '+ connection  + '. My User-Agent is '+ user_agent)
})

// Request post method
app.post('/info', function(req, res) {
    let user_name = req.header('user_name')
    let password = req.header('password')
    let org_name = req.query.org_name
    let address = req.query.address
    res.send('Username: ' + user_name + ' and Password: ' + password + '. Organization name is '+ org_name + ' and address is ' + address)
})

// Request post method in body by json
app.post('/info-body-request', function(req, res) {
    let class_name = req.body.class_name
    let role = req.body.role
    res.send(
        '. Class name is '+ class_name + ' and role is ' + role
    )
})

// multipart-form data post method in body by json
app.post('/form-data', function(req, res) {
    let JsonData = req.body
    res.send(JSON.stringify(JsonData))
})

app.listen(port, () => {  
    console.log(`app listening at http://localhost:${port}`) 
})