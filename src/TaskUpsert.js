import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CtxAppModal, CtxTasks } from "./App";
import { useContext, useEffect, useRef, useState } from "react";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

function TaskUpsert() {
  const refTitle = useRef("");
  const refBody = useRef("");

  const { setOpenModal } = useContext(CtxAppModal);
  const { bucket, upsertId, setUpsertId, setBucket } = useContext(CtxTasks);
  const [isAbleToSubmit, setIsAbleToSubmit] = useState();

  const existedObj = bucket.find((o) => o.id === upsertId);

  const handleClose = () => {
    setOpenModal(false);
    setUpsertId(undefined);
  };

  const isValidated = () => {
    let rs = true;
    //     A/C: The save button should not be enabled unless or
    // until any new changes are updated in any of the
    // input field.
    const latest = getPreSubmitObj();

    if (JSON.stringify(latest) === JSON.stringify(existedObj)) rs = false;

    // A/C: Same title name should not be used more than once.
    if (bucket.find((o) => o.title === latest.title)) rs = false;

    return rs;
  };

  const checkPreSubmit = () => {
    const lgtm = isValidated();
    setIsAbleToSubmit(lgtm);
  };

  const getPreSubmitObj = () => {
    const newObj = {
      ...existedObj,
      title: refTitle.current.value,
      body: refBody.current.value,
    };
    return newObj;
  };

  const handleSubmit = () => {
    if (!isValidated()) {
      return;
    }
    const newObj = getPreSubmitObj();

    const newBucket = bucket.map((o) => {
      if (o.id === upsertId) return newObj;
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
              onChange={checkPreSubmit}
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
              onChange={checkPreSubmit}
            />

            <Box sx={{ paddingTop: 2, textAlign: "right" }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                variant="contained"
                disabled={!isAbleToSubmit}
              >
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
