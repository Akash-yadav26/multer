// const path  = require("path");
// const express = require("express");
// const app= express();
// const multer =require('multer');
// const upload = multer({ dest: 'uploads/' })
// const PORT = 6001;
// app.set("view engine","ejs");
// app.set("views",path.resolve("./views"));
// app.use(express.urlencoded({extended:false}));

// app.get("/",(req,res)=>{
//     return res.render("homepage");
// });
// app.post('/upload',upload.single('profileImage'),(req,res)=>{
//     console.log(req.body);
//     console.log(req.file);
//     return res.redirect("/");
// });
// app.listen(PORT,()=>  console.log("server started at port 6001"));


// next steeepp --> because above code find difficult to read code
const path  = require("path");
const express = require("express");
const app= express();
const multer =require('multer');
const PORT = 6001;

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,"./uploads");
    }, //kon se folder ke ander file ko save karna hai --cb= callback
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`);


    }, // set file name
});

const upload = multer({storage});
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    return res.render("homepage");
});
//  app.post('/upload',upload.single('profileImage'),(req,res)=>{
//      console.log(req.body);
//      console.log(req.file);
//      return res.redirect("/");
//  });
app.post('/upload',upload.fields([{name: 'profileImage'},{name: 'coverImage'}]),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
});

app.listen(PORT,()=>  console.log("server started at port 6001"));
