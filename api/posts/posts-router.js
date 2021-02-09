// implement your posts router here

//import models
const Posts = require('./posts-model');

//import express
const express = require("express");

//import Router
const router = express.Router();

//build out the endpoints

//1. basic data retrieval
router.get('/',(req,res)=>{
    Posts.find(req.query)
        .then(posts =>{
            res.status(200).json(posts)
        })
        .catch((error)=>{
            res.status(400).json({message:`${error}`})
        })
})

//2.fetching specific post via id
router.get('/:id', (req,res)=>{
    Posts.findById(req.params.id)
        .then(post=>{
            if(post){
                res.status(200).json(post)
            } else{
                res.status(404).json({message:`The post with the specified ID does not exist`})
            }
        }) .catch(error=>{
            res.status(500).json({message:`${error}`})
        });
})

module.exports = router;