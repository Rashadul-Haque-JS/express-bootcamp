const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


// get style.css as default-----
app.use(express.static('public'))

//landing page-----
app.get('/', (req, res) => {
    res.render('index')
})

// save username and redirect-----
app.post('/setname', (req, res) => {
    const userName = req.body.userName
    console.log(userName)
    res.set('Set-Cookie', "userName=" + userName)
    res.redirect('/pages/chat')
})
app.get('/pages/chat', (req, res) => {
    const usr = req.headers.cookie
    const usrName = usr.split('=')
    res.render('pages/chat', {
        cookie: usrName[1]
    })
    console.log(req.headers.cookie)
})

app.listen(8000);
console.log('Server running on port 8000')