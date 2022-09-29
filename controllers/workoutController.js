const { isObjectIdOrHexString } = require("mongoose")
const Workout = require("../models/workoutModel")

//  get all workout
const getWorkouts= async(req, res)=>{
    const workouts= await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}
// get a single workout
const getWorkout=async(req,res)=>{
    const {id}= req.params
    const singleWorkout = await Workout.find({title:id})
    if(!singleWorkout){
        return res.status(400).json({error:"no such workout"})
    }

    res.status(200).json(singleWorkout)
}
// create a new workout
const createWorkout = async(req,res)=>{
    const {title, load, reps}=req.body
    try {
        const workout = await Workout.create({title, load, reps})
        await workout.save()
        console.log(workout)
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// delete a workout

// update a workout

module.exports={
    createWorkout,
    getWorkouts,
    getWorkout
}