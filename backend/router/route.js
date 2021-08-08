const express = require('express');
const router = express.Router();
const model = require('../models/schema')

router.get('/', async (req, res) => {
    
    try{
        const data = await model.find();
        res.json(data);
    }
    catch(err){
        res.json({msg: 'Error while retrieving the data'});
    }
        
});

router.post('/', (req, res) =>{
    const new_entry = new model({
        task: req.body.task,
        date: req.body.date,
        time: req.body.time,
        priority: req.body.priority
    })
    console.log(new_entry);
    new_entry.save()
        .then(data => {
            res.json({msg: "yes"});
        })
        .catch(err => {
            res.json({msg: "no"})
        })
})

router.delete('/:taskID', async (req, res) => {
    try{
        const removed = await model.deleteOne({_id: req.params.taskID})
    }
    catch (err) {
        console.log(err);
    }
})


router.patch('/:taskID', async (req, res) => {
    try{
        const update = await model.updateOne({_id: req.params.taskID}, {$set: {priority: req.body.priority}})
        console.log(update);
    }
    catch (err) {
        console.log(err);
    }
})


module.exports = router;

