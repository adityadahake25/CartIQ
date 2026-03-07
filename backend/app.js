import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("CartIQ");
});

export default app;
