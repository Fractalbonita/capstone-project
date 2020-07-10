import express from 'express'
import bodyParser from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import cors from 'cors'

import Play from '../models/PlayModel'

const PORT = 3001
const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(fileUpload())

mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Mongoose is working'))


app.get('/plays', (request, response) => {
  Play.find({})
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error)
      response.send(400)
    })
})

app.post('/upload', (request, response) => {
  response.send('http://example.com')
/*
  playImage.mv('${__dirname/frontend/public}/uploads/${file.name}'), () => {
    response.json({ filename: file.name, imageURL: '/uploads/${file.name'})
  }
  */
})

app.post('/plays', (request, response) => {
  const newPlay = request.body

  Play.create(newPlay)
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error)
      response.send(400)
    })
})

app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`))