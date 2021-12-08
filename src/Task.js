import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CtxAppModal } from "./App";
import { useContext } from "react";

export default function Task() {
  const title = "Title 1";
  const desc = "Lorem ipsum";
  const ctxTaskUpsert = useContext(CtxAppModal);

  const handleClickEdit = ctxTaskUpsert.setOpenModal;
  return (
    <Card sx={{ minWidth: 275, mx: 2, my: 2 }}>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" onClick={handleClickEdit}>
          Edit
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">{desc}</Typography>
      </CardContent>
    </Card>
  );
}
