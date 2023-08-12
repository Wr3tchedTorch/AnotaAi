const express = require("express");
const app = express();
const port = 3001;
const noteRouter = require("./routers/note");

app.use(express.json());
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
