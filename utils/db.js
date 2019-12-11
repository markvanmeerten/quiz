//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://mark:test@alfa-znv2l.mongodb.net/quiz?retryWrites=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);

// FindOneAndModify is deprecated, but keeps breaking stuff
mongoose.set("useFindAndModify", false);

// Get the default connections
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("connected", console.error.bind(console, "MongoDB connected.."));
db.on("disconnected", console.error.bind(console, "MongoDB disconnected.."));
