// const express = require('express')
import express from "express"
import path from "path";

const __dirname = path.resolve();

const app = express()
const port = 3000

// const path = require('path')

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/animatie1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/animatie1.html'))
})

app.get('/animatie2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/animatie2.html'))
})

app.listen(port, () => {
  console.log(`Gebruik Port: ${port}`)
})