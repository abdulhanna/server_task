import mongoose from 'mongoose';

(async () => {
     
  let  password = "JVc0R1F4lkDMSyeb"
  
//   let user = abdulhannan
  let cluster = 'mongodb+srv://abdulhannan:XgMYoOUsgPNcEzOl@cluster0.mvhte7n.mongodb.net/'
  // let db = "mongodb+srv://abdul:rysGanw49NNU9LE7@cluster0.chphgsc.mongodb.net/task?retryWrites=true&w=majority"
  let cluster1 = "mongodb+srv://taskcreator:mXzdotzU08QQytaS@cluster0.mvhte7n.mongodb.net/?retryWrites=true&w=majority"

    try {
        const mongoUri = 'mongodb://localhost:27017/task_creator';

        await mongoose.connect(cluster1, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.error('mongo is connected');
    } catch (err) {
        console.error('mongo is not connected', err);
    }
})();


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://abdul1:ZMSLDoS4j5MsHoPg@cluster0.mvhte7n.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
