import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  imageURL: String,
  gameTitle: String,
  playDate: Date,
  players: [{ name: String, fraction: String, score: Number, rank: Number }],
  playingTime: Number,
  playRating: Number,
})

export default mongoose.model('Play', productSchema)