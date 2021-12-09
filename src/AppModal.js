import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CtxAppModal } from "./App";
import { useContext } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AppModal({ childContent }) {
  const { openModal: open, setOpenModal: setOpen } = useContext(CtxAppModal);
  const handleClose = () => setOpen(false);

  // IMPORTANT: => try to avoid unnecessery render in this VERY SPECIAL case
  if (!open) return null;

  const ChildContent = childContent;
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ChildContent />
        </Box>
      </Modal>
    </div>
  );
}
export default AppModal;
