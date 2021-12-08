import { Container, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useState } from "react";
import AppModal from "./AppModal";
import TaskList from "./TaskList";

export const CtxTasks = createContext({ bucket: [] });
export const CtxAppModal = createContext({});

function App() {
  const [bucket] = useState([...Array(3)]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <style>{`body  {background: #f2f2f2}`}</style>
      <CtxTasks.Provider value={{ bucket }}>
        <CtxAppModal.Provider value={{ openModal, setOpenModal }}>
          <CssBaseline />
          <Container maxWidth="sm">
            <TaskList />
          </Container>
          <AppModal
            childContent={() => {
              <>
                {" "}
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </>;
            }}
          />
        </CtxAppModal.Provider>
      </CtxTasks.Provider>
    </>
  );
}

export default App;
