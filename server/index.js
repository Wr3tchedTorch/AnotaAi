const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 10000;
const noteRouter = require("./routers/note");
const path = require("path");
const { sequelize } = require("./sequelize/models/");

const connectDb = async () => {
  console.log("checking database connection");
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");
  } catch (e) {
    console.log("Database connection failed", e);
    process.exit(1);
  }
};

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

(async () => {
  await connectDb();

  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
})();
