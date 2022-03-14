const express = require('express')

const app = express()

// import function from module
const math = require('../module/cal').calculator


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));


let answer = 0;

app.get('/', (req, res) => {
    res.render('index')

})

app.post('/set', (req, res) => {
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    let operator = req.body.op
        //console.log(req.body)

    answer = math(num1, num2, operator)
    res.redirect('/stuff')
})

app.get('/stuff', (req, res) => {
    // console.log(req.headers)
    res.render('stuff', { answer: answer.toFixed(2) })
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})