import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Task() {
  const title = "Title 1";
  const desc = "Lorem ipsum";
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small">Edit</Button>
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
