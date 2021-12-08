import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useEffect, useState } from "react";
import AppModal from "./AppModal";
import TaskList from "./TaskList";
import TaskUpsert from "./TaskUpsert";
import axios from "axios";

export const CtxTasks = createContext({ bucket: [] });
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
      <CtxTasks.Provider value={{ bucket }}>
        <CtxAppModal.Provider value={{ openModal, setOpenModal }}>
          <CssBaseline />
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
