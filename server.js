const express=require("express");
const app=express();
const router=require("./router");
const port = process.env.PORT || 8000;
const jwt=require("jsonwebtoken");


app.use(router);
app.use(express.static("./public"));

app.listen(port,()=> {
    console.log(`server is listin on http://localhost:${port}`)
})