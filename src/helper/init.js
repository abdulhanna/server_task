import mongoose from 'mongoose';

(async () => {
     
  let  password = "JVc0R1F4lkDMSyeb"
  
//   let user = abdulhannan
  // let cluster = 'mongodb+srv://abdulhannan:XgMYoOUsgPNcEzOl@cluster0.mvhte7n.mongodb.net/'
  let db = "mongodb+srv://abdul123:abdul@123@cluster0.chphgsc.mongodb.net/task?retryWrites=true&w=majority"

    try {
        const mongoUri = 'mongodb://localhost:27017/task_creator';

        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.error('mongo is connected');
    } catch (err) {
        console.error('mongo is not connected', err);
    }
})();

