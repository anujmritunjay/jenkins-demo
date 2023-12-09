const express = require('express');
const mongoose = require('mongoose')
const User = require('./models/user')
require('dotenv').config()




const app = express()

const PORT = 4000;

database = process.env.DB
console.log('------------------>',database)

mongoose.connect(process.env.DB)
    .then(console.log('Database connected successfully'))
    .catch(err => console.log(err))

app.get('/get-user', async(req, res)=>{
    const users = await User.findOne()
    res.json({
        success: true,
        data: users
    })

})

app.get('', (req, res)=>{
  res.json({
    success: true,
    data : database
  })
})

app.get('/get-data', async(req, res)=>{
    res.json({
        success: true,
        data: [
            {
              "name": "Amit Kumar",
              "age": 20,
              "gender": "Male"
            },
            {
              "name": "Priya Sharma",
              "age": 21,
              "gender": "Female"
            },
            {
              "name": "Raj Singh",
              "age": 19,
              "gender": "Male"
            },
            {
              "name": "Sanya Patel",
              "age": 22,
              "gender": "Female"
            },
            {
              "name": "Vijay Gupta",
              "age": 20,
              "gender": "Male"
            },
            {
                "name": "Mritunjay Paswan",
                "age": 25,
                "gender": "Male"
            },
            {
                "name": "Priyank Kumar Patel",
                "age": 25,
                "gender": "Male"
            },
            {
              "name": "Maulik Patel",
              "age": 30,
              "gender": "Male"
          }
          ]
        
    })
})


app.listen(PORT, ()=> console.log(`Server is running on the port ${PORT}`));