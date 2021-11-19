// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://localhost:27017/"; //url local

const getByTitle = () => {
  let movie_title = "Toy Story";
  return movie_title;
};

client.connect(url, function (err, client) {
  //connect to the db
  var db = client.db("movie-dataset");
  var collection = db.collection("movies_metadata"); // connect to the collection

  var query = {
    original_title: getByTitle(),
  };

  var projection = {
    original_title: 1,
  };

  var cursor = collection.find(query).project(projection); //sort, limit, project are also common commands

  var aggregate = collection.aggregate([
    //made it with aggregate
    {
      $match: {
        original_title: "Die Hard",
      },
    },
  ]);

  cursor.forEach(
    function (doc) {
      console.log(doc);
    },
    function (err) {
      client.close();
    }
  );

  aggregate.forEach(function (doc) {
    console.log(doc);
  });
  // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
});
