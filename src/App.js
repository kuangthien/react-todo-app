import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useState } from "react";
import TaskList from "./TaskList";

export const CtxTasks = createContext({ bucket: [] });

function App() {
  const [bucket] = useState([...Array(3)]);
  return (
    <>
      <style>{`body  {background: #f2f2f2}`}</style>
      <CtxTasks.Provider value={{ bucket }}>
        <CssBaseline />
        <Container maxWidth="sm">
          <TaskList />
        </Container>
      </CtxTasks.Provider>
    </>
  );
}

export default App;
