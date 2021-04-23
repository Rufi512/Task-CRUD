import React, { useState, useEffect } from "react";
import { getList, deleteTask } from "../components/API";
import {useHistory} from 'react-router-dom'
export const TaskList = () => {
  let history = useHistory()
  const [tasks, setTasks] = useState([]);

  const request = async () => {
    const res = await getList();
    if (!res.data) {
      return;
    }
    setTasks(res.data);
  };

  const deleteThis = async (id) => {
    const res = await deleteTask(id);
    if (!res.data) {
      alert(res.message);
      return;
    }

    request();
  };

  useEffect(() => {
    const load = () => {
      request();
    };
    load();
  }, []);

  return (
    <div className="container-tasks">
      {tasks.length >= 1 ? tasks.map((el, i) => {
        return (
          <div className="task" key={i}>
            <div>
              <h3 style={{ margin: "0" }}>Task name</h3>
              <p>{el.name}</p>
              <h3>Description of the task</h3>
              <p>{el.description}</p>
            </div>
            <div>
              <button
                onClick={(e) => {
                  deleteThis(el._id);
                }}
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  history.push('/modify',{id:el._id,name:el.name,description:el.description});
                }}
              >
                Modify
              </button>
            </div>
          </div>
        );
      }) : (<h2>Empty task list</h2>)}
    </div>
  );
};
