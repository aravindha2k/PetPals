const { default: mongoose } = require("mongoose");

const connection = mongoose.connect("mongodb+srv://rausskr6565:430wUQw8nahaIPiv@cluster0.5ivylol.mongodb.net/petPals?retryWrites=true&w=majority")

module.exports={
  connection
}
