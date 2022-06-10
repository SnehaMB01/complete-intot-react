const express=require("express")
const app=express()
const mongoose=require("mongoose")
const ejs=require("ejs")
app.set('view engine','ejs');
mongoose.connect('mongodb+srv://sneha:sneha@cluster0.lrrgp.mongodb.net/notesDB');
const User= {
    fname:String,
        email:String,
        password:String,
       
}
const Note = mongoose.model("Note",User);
app.get("/",(req,res)=>
{
    Note.find({},function(err,notes)
    {
        res.render('index',
        {
           notesList:notes
        });
    })
})
app.listen(4000,function()
{
    console.log("running 4000");
})