// DeleteDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

const DeleteDialog = ({ open }) => {
  const handleConfirm = () => {
    // Implement the delete confirmation logic here
  };

  const handleClose = () => {
    // Handle closing the dialog
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogActions>
        <Button onClick={handleConfirm} color="error" variant="contained">
          Confirm
        </Button>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
