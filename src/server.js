import express from "express";
import morgan from "morgan";

const PORT = 8080;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res, next) => {
  return res.send("hello");
};

const login = (req, res, next) => {
  return res.send("login");
};
app.use(logger);
app.get("/", handleHome);
app.get("/login", login);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
