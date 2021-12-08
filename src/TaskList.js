import { useContext } from "react";
import { CtxTasks } from "./App";
import Task from "./Task";

const TaskList = () => {
  const ctx = useContext(CtxTasks);
  const taskList = ctx.bucket;
  return (
    <>
      {taskList.map((o) => (
        <Task />
      ))}
    </>
  );
};

export default TaskList;
