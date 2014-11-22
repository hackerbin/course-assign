/**
 * Created by NurulHuda on 11/23/2014.
 */
var express = require('express');
    app = express();

app
    .use(express.static('./public'))
    .get('*',function(req,res){
        res.sendfile('public/main.html');
    })
    .listen(3000);
