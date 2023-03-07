import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.use(express.json());

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.send(`You submitted: ${cityName}`);
});

app.listen(PORT, () => console.log(`Server is listening now port ${PORT}`));