import task from "../models/task";
import mongoose from "mongoose";

export const getList = async (req, res) => {
  const tasks = await task.find();
  res.json(tasks);
};

export const create = async (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    res.status(400).json({ message: "Set a simple name to task please!" });
    return;
  }
  const newTask = new task({
    name,
    description: description ? description : undefined 
  });
  await newTask.save();

  res.json({ message: "Task saved!" });
};

export const modify = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  if (!name) {
    res.status(400).json({ message: "Name not empty" });
    return;
  }
  await task.findOneAndUpdate({ _id: id }, {
    name,
    description : description ? description : 'No description provided'
  },{upsert:true});
  res.json({ message: "Task update!" });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await task.findByIdAndDelete(id);
  res.json({ message: "Task delete!" });
};
