const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
    title: {
        type: String,
        trim: true,
        
    },
    body: {
        type: String,
        trim: true,
        
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "Users"
        }
    ]
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;