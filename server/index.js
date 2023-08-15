const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const noteRouter = require("./routers/note");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send({ Message: "Hello, World!" });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
