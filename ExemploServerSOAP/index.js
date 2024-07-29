const soap = require('soap');
const express = require('express');
const fs = require('fs');

const PORT = 8001;

const app = express();

var myservice = {
    ws: {
        calc: {
            somar: function (args) {
                var num = 1 * args.a + 1 * args.b;
                return { sumres: num };
            },

            multiplicar: function (args) {
                var num = args.a * args.b;
                return { mulres: num };
            }
        }
    }
};

var xml = fs.readFileSync('wscalc1.wsdl', 'utf8');

app.listen(PORT, function () {
    soap.listen(app, '/wscalc1', myservice, xml, function () {
        console.log('Server initialized, PORT: ' + PORT);
    });
});