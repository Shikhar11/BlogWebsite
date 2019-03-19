var express= require("express");
var app=express();
var mongoose= require("mongoose");
var bodyParser=require("body-parser");
var methodOverride=require("method-override");

mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type:Date, default: Date.now}
});
var blog= mongoose.model("blog",blogSchema);
//blog.create({
   // title: "test blog",
    //image: "data:image/jpeg;base64,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",
     //body: "hello this is the blog post"
//});
app.get("/",function(req,res){
   res.redirect("/blogs"); 
});
app.get("/blogs",function(req,res){
    blog.find({},function(err, blogs){
        if(err){
            console.log("err");
        }
        else{
            res.render("index", {blogs: blogs});
        }
    });
});
app.get("/blogs/new",function(req,res){
   res.render("new.ejs"); 
});
app.post("/blogs",function(req,res){
   blog.create(req.body.blog, function(err, newblog){
       if(err){
           res.render("new");
       }
       else{
           res.redirect("/blogs");
       }
   });
});
app.get("/blogs/:id",function(req,res){
   blog.findById(req.params.id, function(err, foundBlog){
      if(err){
          res.redirect("/blogs");
      }
      else{
          res.render("show.ejs", {blog: foundBlog});
      }
   }); 
});
//edit route
app.get("/blogs/:id/edit",function(req,res){
   blog.findById(req.params.id, function(err, foundBlog){
      if(err){
          res.redirect("/blogs");
      }
      else{
          res.render("edit.ejs", {blog: foundBlog});
      }
   }); 
});
//update route
app.put("/blogs/:id",function(req,res){
   blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedblog){
      if(err){
          res.redirect("/blogs");
      }
      else{
          res.redirect("/blogs/"+ req.params.id);
      }
   });
});
app.delete("/blogs/:id", function(req,res){
   blog.findByIdAndRemove(req.params.id,function(err){
      if(err){
          res.redirect("/blogs");
      } 
      else{
          res.redirect("/blogs");
      }
   });
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
});
