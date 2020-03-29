var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
    if (!err) {
        console.log('Mongo database created');
    } else {
        console.log(err);
    }
    db.close();
});