const express = require('express');
const app = express();
const port = 3000;
const multer  = require('multer')
var storage = multer.memoryStorage();
const upload = multer({ 
                dest: 'uploads/',
                storage: storage
 })



const {apipic,api,apidoc} = require('../api-wa-node/Controller/WaController')



app.set('view engine', 'ejs')
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('index')
 })

 app.get('/pic', (req, res) => {
  res.render('pic')
})

app.get('/doc', (req, res) => {
  res.render('doc')
})


    app.post('/api', upload.any(), (req, res) => {

    const textWA = req.body.text;
    const NoHP = req.body.nohp;



  

    api(NoHP, textWA)
//     const myArr = textWA.split(",")
//     console.log(myArr);
// for(const no of myArr){
//     console.log(no);
//     api(NoHP, textWA, base64_pic, base64_file)
// }

res.redirect('/'); 
  
})




app.post('/apipic', upload.any(), (req, res) => {

  const caption = req.body.caption;
  const NoHP = req.body.nohp;
  const gambar = req.files[0];
  var base64_pic = null;


  if (gambar == null) {
    
  }else{
base64_pic =+ gambar.buffer.toString('base64');
  }

  

  apipic(caption,NoHP, base64_pic)
//     const myArr = textWA.split(",")
//     console.log(myArr);
// for(const no of myArr){
//     console.log(no);
//     api(NoHP, textWA, base64_pic, base64_file)
// }


res.redirect('/pic'); 

})





app.post('/apidoc', upload.any(), (req, res) => {


  const caption = req.body.text;
  const NoHP = req.body.nohp;
  const file = req.files[1];
  var base64_file = null;


  if (file == null) {
    
  }else{
    base64_file = file.buffer.toString('base64');
  }


  apidoc(caption ,NoHP, base64_file)
//     const myArr = textWA.split(",")
//     console.log(myArr);
// for(const no of myArr){
//     console.log(no);
//     api(NoHP, textWA, base64_pic, base64_file)
// }
res.redirect('/doc'); 
})

app.listen(port, () =>{
    console.log(`This running on port ${port}`);
});
