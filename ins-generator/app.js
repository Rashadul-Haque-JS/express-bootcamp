const fs = require('fs/promises')
const express = require('express')
const { json } = require('express/lib/response')
const app = express()

// import function from module
const randomize = require('../module/insult').randomize
const createObject = require('../module/insult').createObject

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.set('view engine', 'ejs')

// Global variables------------------------gb-start--------
let insultStr = '';
const insults = []
let searchId = 0;
//-----------------------------------------gb-end-------------


async function insult() {
    const data = await fs.readFile('insult.txt', { encoding: 'utf8' })
    let ins = data.split("\n")

    // use of imported 'createObject' function from module
    createObject(ins, insults)
}

insult()


app.get('/', (req, res) => {
    res.render('index')

})


app.post('/insert', async (req, res) => {
    const newInsult = req.body.insult
    let item = {}
    item.id = insults.length
    item.insult = newInsult
    insults.push(item)

    // To controll if push works
    const lastInArray = await insults[insults.length - 1]
    console.log('THIS IS THE LAST INSERT : ' + lastInArray)
    res.redirect('/insult')

})

app.get('/insult', (req, res) => {
    // console.log(req.headers)

    // use of imported 'randomize' function  from module
    res.render('insult', { randomTexts: randomize(insults) })

})

app.post('/say', async (req, res) => {
    searchId = req.body.id
    const searchRes = insults.find(ob => ob.id == searchId)
    if (searchRes) {
    console.log(searchRes)
    insultStr = searchRes.insult
    }else{
        insultStr = `<p class="mgs">NO INSULT FOUND BY ID NUMBER ${searchId} ! PICK A NUMBER BETWEEN 1 - ${insults.length}</p>`
    }
    

    res.redirect('/find')

})


app.get('/find', (req, res) => {

    res.render('find', { searchRes: insultStr, searchId: searchId })

})




app.listen(5000)
console.log('Server is running on port: 5000')