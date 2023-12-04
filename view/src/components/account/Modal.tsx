import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import RegisterLoginTab from "./RegisterLoginTab";
import type { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";

import { closeAccountModal, openAccountModal } from "./store/accountSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const open = useSelector((state: RootState) => state.account.isAccountModalOpen);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openAccountModal());
  const handleClose = () => dispatch(closeAccountModal());

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Modal aria-labelledby="spring-modal-title" aria-describedby="spring-modal-description" open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }}>
        <Box sx={style}>
          <RegisterLoginTab />
        </Box>
      </Modal>
    </>
  );
}
