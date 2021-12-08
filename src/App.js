import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Task />
      </Container>
    </div>
  );
}

export default App;
