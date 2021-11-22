var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://localhost:27017/"; // local url

client.connect(url, function (err, client) {
  //connect to the db
  var db = client.db("movie-dataset");
  var collection = db.collection("movies_metadata"); // connect to the collection

  collection.insertOne({ firstName: "Sebastian", topic: "MongoDB " }); // add data to the DB
});
