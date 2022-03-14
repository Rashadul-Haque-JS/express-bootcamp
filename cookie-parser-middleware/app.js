const express = require('express')

const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())

let cookieBox = {}

app.get('/', (req, res) => {

    res.cookie(cookieBox.grill = "korv")
    res.send(`<h3>Request made </h3>`)

    console.log(cookieBox)

})


app.listen(4000)
console.log('server running on port 4000')