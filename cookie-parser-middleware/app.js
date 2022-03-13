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


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})