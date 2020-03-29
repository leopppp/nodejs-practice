var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, db) => {
    if (!err) {
        let dbObject = db.db('mydb');
        dbObject.createCollection('customers', (err, res) =>{
            if(err) throw err;
            console.log("Collection created");
            db.close();
        });
    } else {
        console.log(err);
    }
});