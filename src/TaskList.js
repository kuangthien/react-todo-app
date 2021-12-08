import { Pagination, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { CtxTasks } from "./App";
import Task from "./Task";

const ITEMS_PER_PAGE = 10;

const TaskList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ctx = useContext(CtxTasks);
  const taskList = ctx.bucket;

  const totalOfPages = parseInt(Math.ceil(taskList.length / ITEMS_PER_PAGE));

  const handleChangePage = (pageNumber) => setCurrentPage(pageNumber);

  const listToDisplayAfterPaging = taskList.filter((o, idx) => {
    const idxToHumanBrain = idx + 1; //ex: idx: 1...10 ; currentPage: 1 =====> valid

    const from = ITEMS_PER_PAGE * (currentPage - 1) + 1; //ex: (10*0)+1 = 1
    if (from > idxToHumanBrain) return false;

    const to = ITEMS_PER_PAGE * currentPage; // ex: 10 * 1 = 10
    if (to < idxToHumanBrain) return false;

    return true;
  });

  return (
    <>
      {listToDisplayAfterPaging.map((o) => (
        <Task key={o.id} id={o.id} />
      ))}
      <Stack spacing={2}>
        <Pagination
          count={totalOfPages}
          sx={{ margin: "auto", my: 2 }}
          onChange={(_e, v) => handleChangePage(v)}
        />
      </Stack>
    </>
  );
};

export default TaskList;
