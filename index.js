const express=require("express");
const app=express();
const path=require("path");
const {v4 : uuidv4}=require("uuid");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));

let postArr=[
    {   
        id:uuidv4(),
        likes:1234,
        username:"your_username_123",
        profilepic:"/assets/profile.png",
        postImg:"/assets/post1.jpg",
        caption:"Lorem ipsum dolor sit amet consectetur..."
    },
    {   
        id:uuidv4(),
        likes:122,
        username:"meher_luthra",
        profilepic:"/assets/pic8.jpeg",
        postImg:"/assets/post2.jpeg",
        caption:"Lorem ipsum dolor sit amet consectetur..."
    },
    {   
        id:uuidv4(),
        likes:2319,
        username:"shradha_khapra",
        profilepic:"/assets/pic9.jpeg",
        postImg:"/assets/post3.jpg",
        caption:"Lorem ipsum dolor sit amet consectetur..."
    },
    {   
        id:uuidv4(),
        likes:2000,
        username:"apna_college",
        profilepic:"/assets/pic10.png",
        postImg:"/assets/post4.jpg",
        caption:"Lorem ipsum dolor sit amet consectetur..."
    },
    {   
        id:uuidv4(),
        likes:31234,
        username:"imouni_roy",
        profilepic:"/assets/pic4.jpeg",
        postImg:"/assets/post5.jpeg",
        caption:"Lorem ipsum dolor sit amet consectetur..."
    }
];

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static("public"));

const port=8080;

app.listen(port,()=>{
    console.log("app is listening on port",port);
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});
app.get("/home",(req,res)=>{
    res.render("home.ejs",{postArr});
});

app.get("/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/home",(req,res)=>{
    let id=uuidv4();
    let likes=0;
    let username="your_username_123";
    let profilepic="/assets/profile.png";
    let {postImg,caption}=req.body;
    postArr.push({id,likes,username,profilepic,postImg,caption});
    res.redirect("http://localhost:8080/home");
    // res.render("index.ejs",{postArr});
});

app.delete("/home/:id",(req,res)=>{
    let {id}=req.params;
    // here postArr will contain only those posts whose ids does not match with the id of the post for which the delete btn is clicked
    postArr=postArr.filter((p)=>id!=p.id);
    res.redirect("/home");
});

app.get("/home/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=postArr.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});
app.patch("/home/:id",(req,res)=>{
    let {id}=req.params;
    let {postImg,caption}=req.body;
    let post=postArr.find((p)=>id===p.id);
    post.postImg=postImg;
    post.caption=caption;
    res.redirect("/home");

})
app.get("/home/:id/view",(req,res)=>{
    let {id}=req.params;
    let post=postArr.find((p)=>id===p.id);
    res.render("view.ejs",{post});
});