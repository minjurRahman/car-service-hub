const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

//port
const port = process.env.PORT || 5000;

// Middle wares
app.use(cors());
app.use(express.json());

// console.log(process.env.DB_PASSWORD)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bjaguop.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});







app.get('/', (req, res) =>{
    res.send('car service hub server is running')
});



app.listen(port, () =>{
    console.log(`Car service hub server running on ${port}`)
})