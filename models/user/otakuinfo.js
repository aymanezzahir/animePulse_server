const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeMangaSchema = new Schema({
  rate: { type: Number, max: 100 },
  isfavorite: { type: Boolean },
  order: { type: Number },
});

const otakuinfo = new Schema({
  userId: String,
  username: String,
  bestChar: { type: [animeMangaSchema], default: [] },
  animeFav: { type: [animeMangaSchema], default: [] },
  mangaFav: { type: [animeMangaSchema], default: [] },
  watchList: { type: [animeMangaSchema], default: [] },
  bestGenre: [Number],
  bestQuote: { type: String },
});

const OtakuInfo = mongoose.model("otakuInfo", otakuinfo);

module.exports = OtakuInfo;
