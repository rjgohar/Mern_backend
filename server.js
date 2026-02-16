const epress = require("express");
const dotenv = require("dotenv").config();
const pORT = process.env.PORT || 5000;
const app = epress();

app.use("/api/goals", require("./routes/goalsRoutes"));

app.listen(pORT, () => {
  console.log(`Server is running on port ${pORT}`);
});
