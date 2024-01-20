import express from "express";
import { messages } from "./constants.js";

const app = express();
app.use(express.json()); // parses JSON requests

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server started listening on port ", PORT);
});

app.get("/messages", (request, response) => {
  response.send(messages);
});
