import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  play_id: String,
  imageURL: String,
  game_title: String,
  play_date: String,
  players: String,
  playing_time: String,
  play_rating: String,
})

export default mongoose.model('Play', productSchema)