const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const noteRouter = require("./routers/note");
const path = require("path");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/note", noteRouter);
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
  res.send({ Message: "Hello, World!" });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
