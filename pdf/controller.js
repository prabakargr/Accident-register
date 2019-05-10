var express = require('express');

var app = express();

var path = require("path");

const handlebar=require('handlebars')



//pdf functions

var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'A4', 
                "header": {
                    "height": "20mm"
                 } ,
                 "footer": {
                    "height": "20mm"
                 },
                 "border": {
                     "top":"1px",
                     "bottom":"1px"
                 }
                };
const base64 = require('base64topdf');

app.use(express.static(path.resolve(__dirname, 'templates')));

var arDownload = async function (req, response) {
     let html=await(0,readHTMLFile)('./templates/index.html')
     let template=await handlebar.default.compile(html)
    
    
    const replacement={
        printData: req.body
    };

    let htmlToSend=template(replacement)
    pdf.create(htmlToSend, options).toFile(function (err, res) {
        if (err) return console.log(err);
        let encodedPdf = base64.base64Encode(res.filename);
        let result = {
            "data": encodedPdf
        }
        return response.send(result)

    });
}

const readHTMLFile = (path) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
            err ? reject(err) : resolve(html);
        });
    });
};


module.exports = {
    arDownload: arDownload
}