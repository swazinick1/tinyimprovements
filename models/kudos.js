const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
    title: String,
    body: String

});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;