import express from "express";
const PORT = 8080;
const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>hey!</h1>");
};

const handleLogin = (req, res) => {
  return res.send("login page");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
