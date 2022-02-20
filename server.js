const express = require('express')
const app = express()
const host =  3000 

app.get('/', (req, res)=>{
  res.send('node con express')
})


app.listen(host)
console.log('conectted on ', host)