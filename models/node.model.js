var mongoose = require("mongoose");

var nodeSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  value: {
    type: String,
    required: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "node",
    required: true
  }
});

const Node = mongoose.model("node", nodeSchema);

module.exports = Node;
