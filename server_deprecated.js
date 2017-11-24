const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/show_kitten', (request, response) => {
    response.writeHead(200, {'content-Type' : 'text/html'});
    response.end('<img src="/kitten.jpg">');
});

app.get('/', (req,res) => res.send("hello world!"));

app.get('/get_example_1', (request, response) => {
    response.send('<a href="/get_example_2">2번 링크로 이동</a>');
});

app.get('/get_example_2', (request, response) => {
    response.send('<a href="/get_example_1">1번 링크로 이동</a>');
});

app.get('/get_example/:id', (request, response) => {
    response.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
    var name = request.params.id;
    response.write('<a href="/get_example/'+(Number(name)-1)+'">'+(Number(name)-1)+'번 링크로 이동</a><br>');
    response.write('<a href="/get_example/'+(Number(name)+1)+'">'+(Number(name)+1)+'번 링크로 이동</a>');
    response.end();
});

app.use('/a', require('./route/routerA'));
app.use('/b', require('./route/routerB'));

app.listen(process.env.PORT || 3000, ()=> {
    console.log('3000번에서 돕니다.')
});