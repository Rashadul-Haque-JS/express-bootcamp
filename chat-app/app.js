const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.listen(8000);

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
    res.render('pages/chat')
    console.log(req.headers.cookie)
})