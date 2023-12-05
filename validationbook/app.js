const exprees = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const gamepage = require("./Routes/gameshandeler");
const app = exprees();

//6ZdHRt6Kijdzr4nj
const url = "mongodb+srv://rishi:G7g8TWYTXKfuuXnb@cluster0.rp4mxa9.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.Promise = global.Promise;
const con = mongoose.connection;
con.on("open", () => {
  console.log("Database connected");
});

app.use(morgan("dev"));
app.use(exprees.urlencoded({ extended: true }));
app.use(exprees.json());
app.use("/games", gamepage);

app.get("/", (req, res) => {
  res.send("Responding to get request");
});

module.exports = app;
