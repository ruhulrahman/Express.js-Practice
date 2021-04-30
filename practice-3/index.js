var express = require('express')
var multer = require('multer') // for form-data
var app = express()
var port = 3000

var storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './uploads')
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname)
    }
})

var upload = multer({ storage: storage }).single('attachment')
// multipart-form data post method in body by json
app.post('/form-data', function(req, res) {
    upload(req, res, function (error) {
        if (error) {
            res.send('File not uploaded')
        } else {
            res.send('File uploaded successfully')
        }
    })
})

app.listen(port, () => {  
    console.log(`app listening at http://localhost:${port}`) 
})