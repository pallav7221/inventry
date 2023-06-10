import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
} from '@mui/material';
import { styled } from '@mui/system';

const BoldTableCell = styled(TableCell)({
    fontWeight: 'bold',
  });

const CustomTable = ({ data, onDeleteRow, onUpdateStock }) => {
    const [locAStock, setLocAStock] = useState();
    const [locBStock, setLocBStock] = useState();
    const [id, setId] = useState();
    const [open, setOpen] = React.useState(false);
    const handleDelete = (rowId) => {
        onDeleteRow(rowId);
    };

    const openModal = (rowId, stocka, stockB) => {
        setId(rowId);
        setLocAStock(stocka);
        setLocBStock(stockB)
        setOpen(true)
    }
    const handleUpdate = (rowId, stocka, stockB) => {
        setOpen(true)
        setLocAStock(stocka)
        setLocBStock(stockB)
        onUpdateStock(rowId, stocka, stockB);
        setOpen(!open)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <BoldTableCell>Part</BoldTableCell>
                        <BoldTableCell>Alt Part</BoldTableCell>
                        <BoldTableCell>Name</BoldTableCell>
                        <BoldTableCell>Brand</BoldTableCell>
                        <BoldTableCell>Model</BoldTableCell>
                        <BoldTableCell>Engine</BoldTableCell>
                        <BoldTableCell>Car</BoldTableCell>
                        <BoldTableCell>Location A</BoldTableCell>
                        <BoldTableCell>LOCATION A Stock</BoldTableCell>
                        <BoldTableCell>Location B</BoldTableCell>
                        <BoldTableCell>LOC B STOCK</BoldTableCell>
                        <BoldTableCell>Unit</BoldTableCell>
                        <BoldTableCell>Value</BoldTableCell>
                        <BoldTableCell>Rate</BoldTableCell>
                        <BoldTableCell>Remark</BoldTableCell>
                        <BoldTableCell>Actions</BoldTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, idx) => {
                        let temp = row['Part #'];
                        return (

                            <TableRow key={idx}>{
                                temp &&
                                <>
                                    <TableCell>{row['Part #']}</TableCell>
                                    <TableCell>{row['Alt.Part#']}</TableCell>
                                    <TableCell>{row['Name']}</TableCell>
                                    <TableCell>{row['Brand']}</TableCell>
                                    <TableCell>{row['Model']}</TableCell>
                                    <TableCell>{row['Engine']}</TableCell>
                                    <TableCell>{row['Car']}</TableCell>
                                    <TableCell>{row['location A']}</TableCell>
                                    <TableCell>{row['LOCATION A STOCK']}</TableCell>
                                    <TableCell>{row['LOCATION B']}</TableCell>
                                    <TableCell>{row['LOC B STOCK ']}</TableCell>
                                    <TableCell>{row['Unit']}</TableCell>
                                    <TableCell>{row['Value']}</TableCell>
                                    <TableCell>{row['Rate']}</TableCell>
                                    <TableCell>{row['Remarks']}</TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => handleDelete(row['Part #'])}
                                            color="error"
                                            variant="outlined"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            onClick={() => { openModal(row['Part #'], row['LOCATION A STOCK'], row['LOC B STOCK ']) }}
                                            color="primary"
                                            variant="outlined"
                                        >
                                            Update
                                        </Button>
                                    </TableCell>
                                </>}
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Stocks</DialogTitle>
                <DialogContent>
                    <TextField
                        label="LocA Stock"
                        value={locAStock}
                        onChange={(e) => setLocAStock(e.target.value)}
                    />
                    <TextField
                        label="LocB Stock"
                        value={locBStock}
                        onChange={(e) => setLocBStock(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { handleUpdate(id, locAStock, locBStock) }} color="primary" variant="contained">
                        Update
                    </Button>
                    <Button onClick={handleClose} variant="outlined">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </TableContainer>
    );
};

export default CustomTable;
