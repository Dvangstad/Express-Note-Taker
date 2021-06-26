const express = require("express");
const path = require("path")
let db = require("./db/db.json")

let app = express()

let PORT = process.env.PORT || 3002;

//middleware (settings for our server)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

//routing
app.get("/notes", (req, res) => {
    // console.log(req)
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("/api/notes", (req, res) => {
    res.json(db)
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

//listen to inputs
app.listen(PORT, () => {
    console.log("we're live")
})