import { Pagination, Stack } from "@mui/material";
import { useContext } from "react";
import { CtxTasks } from "./App";
import Task from "./Task";

const TaskList = () => {
  const ctx = useContext(CtxTasks);
  const taskList = ctx.bucket;
  taskList.length = 10;
  return (
    <>
      {taskList.map((o) => (
        <Task key={o.id} id={o.id} />
      ))}
      <Stack spacing={2}>
        <Pagination count={10} sx={{ margin: "auto", my: 2 }} />
      </Stack>
    </>
  );
};

export default TaskList;
