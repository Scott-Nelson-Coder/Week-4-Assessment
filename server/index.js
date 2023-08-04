const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


//deconstruct module export
const {getCompliment, getFortune, addFortune, getList } = require('./controller')


app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.post("/api/fortunes", addFortune)
app.get("/api/fortunes", getList)



app.listen(4000, () => console.log("------Party on server 4000------"));
