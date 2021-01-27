const express = require('express')
const mongoose = require('mongoose')

const app = express();

const port = 8080 || process.env.PORT;
const mongoDbConnectionString = "mongodb+srv://sujatha:sunera07@cluster0.b0rzj.mongodb.net/healthrecord?retryWrites=true&w=majority"

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('api/user',)
app.use('api/vital',)


mongoose.connect(mongoDbConnectionString, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
    console.log('connected to the database')
})


app.listen(port, () => console.log('server listening to the port: ', port))