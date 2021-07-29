import mongoose from "mongoose";

const vimaziSchema = mongoose.Schema({
  url: String,
  photographer: String,
  description: String,
  eventNameDate: String,
  likes: Number,
});

//collection inside the datatbase
export default mongoose.model("vimaziVideos", vimaziSchema);
