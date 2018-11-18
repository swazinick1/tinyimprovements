const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
const MONGODB_URI =  process.env.MONGODB_URI || "mongodb://localhost/tinyapp";
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect('mongodb://localhost/tinyapp', {
    useNewUrlParser: true
});

require('./routes/api-routes')(app);

app.listen(PORT, function(){
    console.log(`App running on port ${PORT}`);
});