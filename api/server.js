// implement your server here
const express = require("express");
const server = express();
server.use(express.json());

// require your posts router and connect it here
const postsRouter = require('./posts/posts-router');

//server use? Why?
server.use("/api/posts", postsRouter)

//test endppoint
server.get('/',(req,res)=>{
    res.send(`hello world, this is a get test`)
});

module.exports = server;