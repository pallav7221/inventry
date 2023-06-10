// // UpdateDialog.js
// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
// } from '@mui/material';
// import { updateStock } from '../redux/actions';
// import { useDispatch } from 'react-redux';

// const UpdateDialog = ({open,rowId, stockA, stockB}) => {
//   const [locAStock, setLocAStock] = useState(stockA);
//   const [locBStock, setLocBStock] = useState(stockB);
//   const dispatch = useDispatch();

//   const handleUpdate = (rowId, locAStock, locBStock) => {
//       dispatch(updateStock(rowId, locAStock, locBStock));
//     // Implement the update logic here
//   };

//   const handleClose = () => {
//     // Handle closing the dialog
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Update Stocks</DialogTitle>
//       <DialogContent>
//         <TextField
//           label="LocA Stock"
//           value={locAStock}
//           onChange={(e) => setLocAStock(e.target.value)}
//         />
//         <TextField
//           label="LocB Stock"
//           value={locBStock}
//           onChange={(e) => setLocBStock(e.target.value)}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleUpdate} color="primary" variant="contained">
//           Update
//         </Button>
//         <Button onClick={handleClose} variant="outlined">
//           Cancel
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default UpdateDialog;
