import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});
app.use(cors());

//DB config
const connection_url =
  "mongodb+srv://admin:JOmcGAmSyo6Sprwj@cluster0.gr1md.mongodb.net/vimazi?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  //add data to database
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.put("/v2/:id/like", async (req, res) => {
  try {
    const id = req.params.id;
    const action = req.body.action;
    const result = await Videos.findById(id);
    action ? (result.likes -= 1) : (result.likes += 1);
    result.save();
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
