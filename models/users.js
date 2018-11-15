const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username Required"
    },
    position: {
        type: String,
        trim: true,
        required: "Password Required"
    },
    kudos:[
        {
            type: Schema.Types.ObjectId,
            ref: "Kudos"
        }
    ]
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users
