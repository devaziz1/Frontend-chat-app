const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("App is runing... ");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const chatId = req.params.id;
  const singleChat = chats.find((chat) => chat._id === chatId);
  if (singleChat) {
    res.send(singleChat);
  } else {
    res.status(404).send("Chat not found");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server listening on port... ${PORT}`));
