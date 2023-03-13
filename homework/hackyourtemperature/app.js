import express from "express";
import { API_KEY } from "./sources/keys.js";
const app = express();
app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.use(express.json());
app.post("/weather/:cityName", async (req, res) => {
  const cityName = req.params.cityName;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  if (typeof data.name === "undefined") {
    res.status(404);
    res.send({ weatherText: "City is not found!" });
    return;
  }
  const info = { city: data.name, temperature: `${data.main.temp} Celsius` };
  res.status(200);
  res.send(info);
});
export default app;
