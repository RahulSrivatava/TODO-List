import mongoose  from "mongoose";
const TodoSchema=new mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true,
    }
});
const Todo=mongoose.model('Todo',TodoSchema);
// module.exports=Todo;
export default Todo;