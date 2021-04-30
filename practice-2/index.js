var express = require('express')
var app = express()
var port = 3000

app.get('/', function(err, res) {
    res.send('Home page practice-2')
})

app.listen(port, () => {  
    console.log(`Example app listening at http://localhost:${port}`) 
})