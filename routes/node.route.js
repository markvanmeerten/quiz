const db = require("./../utils/db");
// Express
const express = require("express");
const router = express.Router();
// Components
const Node = require("./../models/node.model");

router.get("/parent/:id", async (req, res) => {
  const { id } = req.params;
  const results = await Node.find({ parent: id, _id: { $ne: id } });
  console.log("/get ", id, results);
  return res.json(results);
});

module.exports = router;
