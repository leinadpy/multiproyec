const mongoose = require("mongoose");

const { HOST, DATABASE } = process.env;
const MONGODB_URI = `mongodb://${HOST}/${DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
