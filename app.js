const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

// Enable CORS serverside
app.use(cors());

const nodeRouter = require("./routes/node.route");
app.use("/node", nodeRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
