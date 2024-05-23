const express = require('express');
const port = 3000;
const app = express();
var bodyParser = require("body-parser");
const {api} = require('../Controller/WaController')
// app.set('view engine', 'ejs')
// app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//    res.render('index')
// })
app.post('/api', (req, res) => {
    const num = req.body.nohp
    const text = req.body.text
    api(num, text)
//     const myArr = num.split(",")
//     console.log(myArr);
// for(const no of myArr){
//     console.log(no);
//     api(num, text)
// }
 });

 app.get('/test', (req, res) => {
    res.send('Hello World')
  })

app.listen(port, () =>{
    console.log(`This running on port ${port}`);
});
