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
// users in db
// db.users.insert({username:"Issac", position:"Lead Scientist"},{username:"Kelly", position:"Manager"},{username:"Pete", position:"Lab Tech"},{username:"Naomi", position:"Lab Tech"},{username:"Sara", position:"Sales Lead"},{username:"Atom", position:"Building Block"}