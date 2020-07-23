import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  imageURL: String,
  gameTitle: String,
  playDate: Date,
  players: Array,
  playingTime: Number,
  playRating: Number,
})

export default mongoose.model('Play', productSchema)