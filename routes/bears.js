var mongo = require('mongodb');
 
var Server = mongo.Server,
  Db = mongo.Db,
  BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('beardb', server);
 
db.open(function(err, db) {
    if(!err) {
        // console.log("Connected to 'beardb' database");
        db.collection('bears', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'bears' collection doesn't exist. Populating.");
                populateDB();
            }
        });
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    // console.log('Retrieving bear: ' + id);
    db.collection('bears', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('bears', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding bear: ' + JSON.stringify(bear));
    db.collection('bears', function(err, collection) {
        collection.insert(bear, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.updateWine = function(req, res) {
    var id = req.params.id;
    var bear = req.body;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(bear));
    db.collection('bears', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, bear, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating bear: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(bear);
            }
        });
    });
}
 
exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting bear: ' + id);
    db.collection('bears', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
var populateDB = function() {
 
    var bears = [
    {
        name: "American Black Bear",
        kingdom: "Animalia",
        picture: "black_bear.jpg"
    },
    {
        name: "American Brown Bear",
        kingdom: "Animalia",
        picture: "brown_bear.jpg"
    }];
 
    db.collection('bears', function(err, collection) {
        collection.insert(bears, {safe:true}, function(err, result) {});
    });
 
};