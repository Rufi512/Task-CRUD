import {Schema,model} from 'mongoose'

const taskSchema = new Schema({
	name:{type: String,required:true},
	description:{type: String,default:'No description provided'}
},{
	versionKey:false
})

export default model('task',taskSchema)
