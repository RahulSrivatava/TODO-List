import mongoose  from 'mongoose';
mongoose.connect('mongodb://localhost/todo_list_db');
const db =mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting to DB'));
db.once('open',function(){
    console.log("Great Success Connected to DB!:)");
});
export default db;