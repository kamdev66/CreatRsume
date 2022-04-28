const mongoose=require('mongoose');

const URL='mongodb+srv://kamdev:bholenath123@cluster0.9jttz.mongodb.net/creat-rsume';

mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser: true})

//checking our database is connected with express or not
const connection= mongoose.connection;
connection.on('connected',()=>{
    console.log('Mongo DB Connection Successful');
})
connection.on('error',(error)=>{
    console.log(error);
})