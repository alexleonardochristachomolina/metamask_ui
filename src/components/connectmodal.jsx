import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Desktop from "./desktop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Connectmodal = () => {
  //handle connectmetamask
  const [openconnectmetamask, setOpenconnectmetamask] = useState(false);
  const handleconnectmetamaskOpen = () => {
    setOpenconnectmetamask(true);
  };
  const handleconnectmetamaskClose = () => {
    setOpenconnectmetamask(false);
  };
  // handleconnectmodal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const connectmetamask = () => {
    handleClose();
    handleconnectmetamaskOpen();
  };
  
  return (
    <div>
      <Button onClick={handleOpen}>Open connectmodal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <div>Metamask LOGO</div>
          <p id="child-modal-description">
            <Button onClick={connectmetamask}>Connect Metask</Button>
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
      {openconnectmetamask && (
        <Desktop
          open={openconnectmetamask}
          handleOpen={handleconnectmetamaskOpen}
          handleClose={handleconnectmetamaskClose}
        />
      )}
    </div>
  );
};

export default Connectmodal;
