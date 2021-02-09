// implement your posts router here

//import models
const Posts = require('./posts-model');

//import express
const express = require("express");

//import Router
const router = express.Router();

//build out the endpoints

router.get('/',(req,res)=>{
    Posts.find(req.query)
        .then(posts =>{
            res.status(200).json(posts)
        })
        .catch((error)=>{
            res.status(400).json({message:`${error}`})
        })
})

module.exports = router;