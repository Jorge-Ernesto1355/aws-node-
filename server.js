const express = require('express')
const { route } = require('express/lib/application')
const Router  = require('Router')
const app = express()

const router = Router()


app.use('/', (req, res)=>{
  res.send('jorge')
})
route.get('/', (req, res)=>{
  res.send('jorge gupao ')
})


const listen = ()=>{
  app.listen(3000)
  console.log('conectado en el puerto 3000')
}

listen()