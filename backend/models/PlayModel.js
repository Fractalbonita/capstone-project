import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  imageURL: String,
  gameTitle: String,
  playDate: String,
  players: String,
  playingTime: String,
  playRating: String,
})

export default mongoose.model('Play', productSchema)