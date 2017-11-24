const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('layout', 'layout');

app.get('/', (req,res,next) => {
    res.render('index', {title:'express'});
});

app.get('/index_embed', (req,res,next) => {
    res.render('index_embed', {title:'express'});
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log('3000번에서 돕니다.')
});