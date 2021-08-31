require('dotenv').config()
const express = require('express')
const session = require('express-session')
const path = require('path')

const {SERVER_PORT, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: true, 
    cookie:{masAge:1000 * 60 * 60 *24}
}))

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => {console.log(`Server connected on port ${SERVER_PORT}.`)})