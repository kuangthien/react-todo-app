import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useEffect, useState } from "react";
import AppModal from "./AppModal";
import axios from "axios";
import TaskList from "./Tasks/TaskList";
import TaskUpsert from "./Tasks/TaskUpsert";

export const CtxTasks = createContext({ bucket: [], upsertId: undefined });
export const CtxAppModal = createContext({});

const fetchExistedTasks = async () => {
  try {
    const rs = (await axios.get("https://jsonplaceholder.typicode.com/posts"))
      .data;
    return rs;
  } catch (error) {}
};

function App() {
  const [bucket, setBucket] = useState([]);
  const [upsertId, setUpsertId] = useState();
  const [openModal, setOpenModal] = useState(false);

  const getTaskListFromServer = async () => {
    const data = await fetchExistedTasks();
    if (!data) return;
    // manipulate BE data:
    const refinedData = data;
    // transform to bucket:
    setBucket(refinedData);
  };

  useEffect(() => {
    getTaskListFromServer();
  }, []);

  return (
    <>
      <style>{`body  {background: #f2f2f2}`}</style>
      <CtxTasks.Provider value={{ bucket, upsertId, setUpsertId, setBucket }}>
        <CtxAppModal.Provider value={{ openModal, setOpenModal }}>
          <CssBaseline />
          <h1>Todo App</h1>
          <Container maxWidth="sm">
            <TaskList />
          </Container>
          <AppModal childContent={() => <TaskUpsert />} />
        </CtxAppModal.Provider>
      </CtxTasks.Provider>
    </>
  );
}

export default App;
