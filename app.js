// jshint esversion:9

const express = require('express');

const app = express()

app.set("view engine", "ejs")


app.listen(3005, ()=> {
    console.log("app running on port 3005")
})
