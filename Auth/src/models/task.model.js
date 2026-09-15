import { Schema, model } from "mongoose"; 

const taskSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String 
    }
}, {timestamps: true})

const TaskModel = model("Task", taskSchema)

export default TaskModel