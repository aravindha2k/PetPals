const { default: mongoose } = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect("mongodb+srv://rausskr6565:430wUQw8nahaIPiv@cluster0.5ivylol.mongodb.net/petPals?retryWrites=true&w=majority");
  } catch (err) {
    console.log(err);
  }
}
module.exports=connectDb;
