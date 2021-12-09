import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CtxAppModal, CtxTasks } from "../App";
import { useContext } from "react";

export default function Task({ id }) {
  const { setOpenModal } = useContext(CtxAppModal);
  const { setUpsertId, bucket } = useContext(CtxTasks);

  const handleClickEdit = (taskId) => {
    setOpenModal(true);
    setUpsertId(taskId);
  };

  // concern => should we pass down whole object as props of Task?
  const objTask = bucket.find((o) => o.id === id);
  const { title, body: desc } = objTask;
  return (
    <Card sx={{ minWidth: 275, mx: 2, my: 2 }} data-testid={`task-${id}`}>
      <CardContent>
        <Box sx={{ textAlign: "right" }}>
          <Button size="small" onClick={() => handleClickEdit(id)}>
            Edit
          </Button>
        </Box>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">{desc}</Typography>
      </CardContent>
    </Card>
  );
}
