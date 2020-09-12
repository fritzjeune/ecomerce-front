// jshint esversion:9

const express = require('express');

const app = express()

app.set("views", './views')
app.set("view engine", "ejs")


app.get('/', (req, res, next)=> {
    res.render('home');
})


app.listen(3005, ()=> {
    console.log("app running on port 3005")
})
