const express = require("express");
const mongoose = require("mongoose");
const Doctor = require("./models/Doctor");
const Review = require("./models/Review");
const cors = require("cors");
const path = require("path");
const diagnosis = require("./diagnosis");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// redo
const db =
  "mongodb+srv://admin:123321@cluster0.lls3e.mongodb.net/diploma?retryWrites=true&w=majority";
// redo

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.get("/api/doctors", (req, res) => {
  Doctor.find()
    .sort({ likes: -1 })
    .then((doctors) => res.json(doctors));
});

app.get("/api/reviews", (req, res) => {
  Review.find()
    .sort({ createdAt: -1 })
    .then((reviews) => res.json(reviews));
});

app.post("/api/reviews", (req, res) => {
  console.log(req.body);

  const review = new Review({
    reviewer: req.body.fio,
    review: req.body.review,
  });

  review.save({
    reviewer: req.body.fio,
    review: req.body.review,
  });
});

app.post("/api/form", (req, res) => {
  const { answers, selectedDoctor, fio } = req.body;
  const diagnos = diagnosis(answers);
  res.json({
    selectedDoctor,
    fio,
    diagnos,
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
