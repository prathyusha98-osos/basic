var express = require('express');
var app= express();
var bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ex");
mongoose.set('useCreateIndex', true);
var http=require('http')
let server=http.createServer(app)
app.listen(process.env.PORT|| 3005,()=>{
    console.log("start the server with port 3005")
  })
  
  
var User=require('./models/user')

app.post('/signup',(req,res)=>{
       var user=new User({
           name:req.body.name,
           PhoneNumber:req.body.phoneNumber,
           Password:req.body.password
       });user.save().then(data=>{
           console.log(data)
           res.send({"message":"user created succesfully" ,data:data})
       })
  })
  