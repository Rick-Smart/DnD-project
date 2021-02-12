const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  race: { type: String, required: true },
  class: { type: String, required: true },
  background: { type: String, required: true },
  alignment: { type: String, required: true }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;