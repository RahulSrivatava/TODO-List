import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { NODATA } from "dns";
import { equal } from "assert";
import db from  "./config/mongoose.js"; 
import  Todo from "./models/todo.js"
const app=express();
const PORT=8000;
app.set('view engine','ejs');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('views',path.join(__dirname,'Views'));
app.use(express.urlencoded());      
app.get('/',function(req,res){
    Todo.find({},function(err,TodoItems){
        if(err){
            console.log("Erroer occured during Fecthing from db ");return;

        }
        return res.render('Home',{
    
            title:"TODO-LIST ",
            todo_list:TodoItems,     
        });
    })
  

});

app.post('/todo-element',function(req,res){
// TodoItems.push(req.body);
Todo.create({
    Title:req.body.Title,
    Description:req.body.Description
},function(err,newTodo){
    if(err){
        console.log("Error In Creating a Todo"); return ;
    }
    // console.log("-*-*-*-*-*-*-*-*-*-",newTodo);
    return res.redirect('/');
})
  
})
app.listen(PORT,function(err){
    if(err){
        console.log("Error!");
    }
    console.log("Server is up at :"+ PORT);
});
app.get('/deletetask',function(req, res){
    let id= req.query.id;
    // console.log(id);
          Todo.findByIdAndDelete(id,function(err){
            if(err)
            {
                console.log("Error in delete data from DB")
            }
              return res.redirect('back');
        })
    
});