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
app.use(express.static('public'))


mongoose.connect('mongodb://localhost:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Mongoose is working'))


app.get('/plays', (request, response) => {
  Play.find({}, 'game_title play_date play_rating imageURL')
    .then(data => response.json(data))
    .catch(error => {
      console.log(error)
      response.status(200).send('[]')
    })
})

app.get('/plays/:id', (request, response) => {
  const _id = request.params.id

  Play.findById({ _id })
    .then(data => response.json(data))
    .catch(error => {
      console.log(error)
      response.status(404)
    })
})


app.post('/upload', (request, response) => {
  const playImage = request.files.image
  const uploadName = `/uploads/${Date.now()}_${playImage.name}`
  playImage.mv(`${__dirname}/../public${uploadName}`, () => {
    response.send(uploadName)
  })
})

app.post('/plays', (request, response) => {
  const newPlay = request.body

  Play.create(newPlay)
    .then(data => response.json(data))
    .catch(error => {
      console.log(error)
      response.send(400)
    })
})

app.listen(PORT, '0.0.0.0', () => console.log(`Server is listening on PORT ${PORT}`))