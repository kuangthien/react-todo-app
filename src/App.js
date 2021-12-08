import { Container } from "@mui/material";
import "./App.css";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Task />
      </Container>
    </div>
  );
}

export default App;
