const express = require('express');
const router = express.Router();
const subscriber = require('../models/subscriber')
// import subscriber from '../models/subscriber';


router.get('/',async(req,res)=>{
    // res.send('Hello World!')
    try{
        const subscribers = await subscriber.find()
        res.json(subscribers)
    }catch (err){
        res.status(500).json({message:err.message})
    }
})

router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})

router.post('/',async (req,res)=>{
    const sub = new subscriber({
        name:req.body.name,
        subscriberToChannel:req.body.subscriberToChannel,
    })

    try{
       const newSub = await subscriber.save()
       res.status(201).json(newSub)
    }catch (err){
        res.status(400).json({message:err.message})
    }
})

router.patch('/',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})


module.exports=router


