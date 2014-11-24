/**
 * Created by NurulHuda on 11/23/2014.
 */
var express = require('express');
    app = express();

app
    .use(express.static('./public'))
    .get('/',function(req,res){
        res.sendFile(__dirname + '/public/main.html');
    })
    .get('/login',function(req,res){
        res.sendFile(__dirname + '/public/login.html');
    })
    .get('/course',function(req,res){
        res.sendFile(__dirname + '/public/views/course.html');
    })
    .get('/course-assign',function(req,res){
        res.sendFile(__dirname + '/public/views/course-assign.html');
    })
    .get('/faculty',function(req,res){
        res.sendFile(__dirname + '/public/views/faculty.html');
    })
    .get('*',function(req,res){
        res.sendFile(__dirname + '/public/login.html');
    })
    .listen(process.env.PORT || 3000);
