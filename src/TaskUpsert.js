import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CtxAppModal } from "./App";
import { useContext } from "react";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

function TaskUpsert() {
  const { setOpenModal } = useContext(CtxAppModal);
  const handleClose = () => setOpenModal(false);
  const handleSubmit = () => {};
  return (
    <div>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Dialog box</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
            />

            <TextField
              margin="dense"
              id="desc"
              label="Description"
              type="text"
              fullWidth
            />

            <Box sx={{ paddingTop: 2, textAlign: "right" }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TaskUpsert;
