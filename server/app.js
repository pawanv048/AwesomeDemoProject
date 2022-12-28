const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
 require('./Employee')

app.use(bodyParser.json())

const Employee = mongoose.model("employee")

const mongoUri = 'mongodb+srv://pawanv0488:kxRNUIOokNnWECTJ@cluster0.fzo9qpy.mongodb.net/?retryWrites=true&w=majority'


// connectioin with database
mongoose.connect(mongoUri,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
  console.log("connected to mongo")
})
mongoose.connection.on("error",(err)=>{
  console.log("error",err)
})

app.get('/',(req,res)=>{
  Employee.find({}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })
  
})

app.post('/delete',(req,res) => {
  Employee.findByIdAndRemove(req.body.id)
  .then(data=>{
    console.log(data)
    res.send('delete')
  }).catch(err =>{
    console.log(err)
  })
})

app.post('/update',(req,res) => {
  Employee.findByIdAndUpdate(req.body.id,{
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    position: req.body.position
  }).then((data) => {
    console.log(data)
    res.send('update')
  }).catch((err) =>{
    console.log(err)
  })
})


// creating route
app.post('/send-data',(req,res)=>{
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    position: req.body.position
  })
  employee.save()
  .then(data =>{
    console.log(data)
    res.send('success ')
  }).catch(err => {
    console.log(err) 
  })
    
})

// port server running
app.listen(4000,() =>{
  console.log('server running')
})