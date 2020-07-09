import express from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import Play from '../models/PlayModel'

const PORT = 3001
const project = express()

project.use(cors())

project.use(bodyParser.json())
project.use(bodyParser.urlencoded())

mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Mongoose is working'))


project.get('/plays', (request, response) => {
  Play.find({})
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error)
      response.send(400)
    })
})

project.post('/plays', (request, response) => {
  const newPlay = request.body

  Play.create(newPlay)
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error)
      response.send(400)
    })
})

project.listen(PORT, console.log(`Server is listening on PORT ${PORT}`))