import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { create } from "../components/API";
export const CreateTask = () => {
  const [task, setTask] = useState({ name: "", description: "" });
  let history = useHistory();
  const sendTask = async (e) => {
    e.preventDefault();
    console.log(task);
    if (task.name === "") {
      alert("The task name cannot be left empty!");
      return;
    }
    const res = await create(task);
    if (!res.data) {
      alert(res.message);
      return;
    }

    history.push("/");
  };

  return (
    <form onSubmit={sendTask}>
      <h2>Create Task</h2>
      <div>
        <label>Task name</label>{" "}
        <input
          id="name"
          type="text"
          autoComplete="off"
          placeholder="Task one, task two..."
          onChange={(e) => {
            setTask({ ...task, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Description of the task</label>{" "}
        <textarea
          id="description"
          onChange={(e) => {
            setTask({ ...task, description: e.target.value });
          }}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
