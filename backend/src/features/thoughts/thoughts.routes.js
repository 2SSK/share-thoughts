import express from 'express';
import ThoughtsController from './thoughts.controller.js';


const thoughtRouter = express.Router();
const thoughtController = new ThoughtsController();

thoughtRouter.post("/addthought", (req,res,next)=>{
    thoughtController.addThought(req,res,next);
})
thoughtRouter.get("/getallthoughts", (req,res,next)=>{
    thoughtController.getthoughts(req,res,next);
})
thoughtRouter.post("/like", (req,res,next)=>{
    thoughtController.likeThought(req,res,next);
})

export default thoughtRouter;