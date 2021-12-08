import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CtxAppModal, CtxTasks } from "./App";
import { useContext, useEffect, useRef } from "react";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

function TaskUpsert() {
  const refTitle = useRef("");
  const refBody = useRef("");

  const { setOpenModal } = useContext(CtxAppModal);
  const { bucket, upsertId, setUpsertId, setBucket } = useContext(CtxTasks);

  const handleClose = () => {
    setOpenModal(false);
    setUpsertId(undefined);
  };
  const handleSubmit = () => {
    const newObj = {};
    newObj.title = refTitle.current.value;
    newObj.body = refBody.current.value;

    const newBucket = bucket.map((o) => {
      if (o.id === upsertId) return { ...o, ...newObj };
      return o;
    });
    setBucket(newBucket);

    handleClose();
  };

  const objTask = bucket.find((o) => o.id === upsertId);

  const { title, body } = objTask || {};

  if (!objTask) return null;

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
              inputRef={refTitle}
              defaultValue={title}
            />

            <TextField
              margin="dense"
              id="desc"
              label="Description"
              type="text"
              fullWidth
              inputRef={refBody}
              defaultValue={body}
              multiline
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
