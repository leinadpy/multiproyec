const mongoose = require("mongoose");

const { HOST, DATABASE, USER, PASSWORD } = process.env;
const MONGODB_URI = `mongodb://localhost/${DATABASE}`;
// const MONGODB_URI = `${HOST}://${USER}:${PASSWORD}@cluster0.1ekye.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
