import bodyParser, { response } from 'express';
import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';

import Play from '../models/PlayModel';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use(express.static('public'));
app.use(fileUpload());

mongoose.connect('mongodb://mongo:27017/capstone-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is working'));

app.get('/plays', (request, response) => {
  Play.find({}, 'gameTitle playDate playRating imageURL')
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error);
      response.send('[]');
    });
});

app.get('/plays/:id', (request, response) => {
  const _id = request.params.id;

  Play.findById({ _id })
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error);
      response.status(404);
    });
});

app.post('/upload', (request, response) => {
  if (!request.files || !request.files.image) {
    return response.status(400).send('No image was uploaded.');
  }

  const imageURL = request.files.image;
  const uploadName = `/uploads/${Date.now()}_${imageURL.name}`;

  imageURL.mv(`${__dirname}/../public${uploadName}`, (error) => {
    if (error) {
      return response.status(500).send(error);
    } else {
      response.send(uploadName);
    }
  });
});

app.post('/plays', (request, response) => {
  const newPlay = request.body;

  Play.create(newPlay)
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error);
      response.status(400);
    });
});

app.put('/plays/:id', (request, response) => {
  const updatePlay = request.body;
  const id = request.params.id;

  Play.findByIdAndUpdate({ _id: id }, updatePlay, { new: true })
    .then((data) => response.json(data))
    .catch((error) => {
      console.log(error);
      response.status(400);
    });
});

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server is listening on PORT ${PORT}`)
);
