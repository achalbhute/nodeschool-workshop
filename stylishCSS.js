var express = require ('express')
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.get(process.argv[3] , function (req, res){
    res.render();
})
app.listen(process.argv[2]);
