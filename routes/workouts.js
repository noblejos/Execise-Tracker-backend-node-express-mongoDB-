const { response } = require("express");
const express = require("express");
const {createWorkout,
    getWorkouts,
    getWorkout
}=require("../controllers/workoutController")


const router = express.Router();

router.get("/",getWorkouts)

router.get("/:id", getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req, res)=>{
    res.json({msg:'delete a work out'})
})

router.patch('/:id', (req, res)=>{
    res.json({msg:'Update a work out'})
})

module.exports=router