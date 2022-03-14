const fs = require('fs/promises')
const express = require('express')
const app = express()

// import function from module
const random = require('../module/insult').randomize

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')

})


app.post('/insert', (req, res) => {
    const newInsult = req.body.insult

    fs.appendFile('insult.txt', newInsult, async(err) => {
        err ? console.log(err) : console.log('appended')
    });

    res.redirect('/insult')

})

async function insult() {
    const data = await fs.readFile('insult.txt', { encoding: 'utf8' })
    const insults = data.split("\n")


    app.get('/insult', (req, res) => {
        // console.log(req.headers)
        res.render('insult', { randomTexts: random(insults) })
            // next()
    })


}

insult()



app.listen(5000)
console.log('Server is running on port: 5000')