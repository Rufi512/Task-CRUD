import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { modify } from "../components/API";
export const ModifyTask = (props) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });

  let history = useHistory();
  const modifyTask = async (e) => {
    e.preventDefault();
    console.log(task);
    if (task.name === "") {
      alert("the task name cannot be left empty!");
      return;
    }
    const res = await modify(props.history.location.state.id, task);
    if (!res.data) {
      alert(res.message);
      return;
    }

    history.push("/");
  };

  useEffect(() => {
    
    if (!props.history.location.state) {
      history.push("/");
      return;
    }

    setTask({
      name: props.history.location.state.name,
      description:
        props.history.location.state.description !== "No description provided"
          ? props.history.location.state.description
          : "",
    });
  }, [props, history]);

  return (
    <form onSubmit={modifyTask}>
      <h2>Modify Task</h2>
      <div>
        <label>Task name</label>{" "}
        <input
          id="name"
          type="text"
          autoComplete="off"
          placeholder="Task one, task two..."
          value={task.name || ""}
          onChange={(e) => {
            setTask({ ...task, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Description of the task</label>{" "}
        <textarea
          id="description"
          value={task.description || ""}
          onChange={(e) => {
            setTask({ ...task, description: e.target.value });
          }}
        />
      </div>
      <button type="submit">Modify Task</button>
    </form>
  );
};
