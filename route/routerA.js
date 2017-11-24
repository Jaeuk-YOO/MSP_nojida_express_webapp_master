var express = require('express');
var router = express.Router();

router.get('/index', (request, response) => {
    response.send('<p>a라우트의 인덱스페이지입니다.</p>')
});

module.exports = router;