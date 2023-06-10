import { createReducer } from '@reduxjs/toolkit';
import { search, deleteRow, updateStock, importCSV } from './actions';

const initialState = {
    data: [],
    filteredData: [],
    deleteDialogOpen: false,
};

const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(search, (state, action) => {
            const searchString = action.payload;

            const filteredData = state.data.filter(
                (row) =>
                    row['Part #']?.includes(searchString) ||
                    row['Alt.Part#']?.includes(searchString)
            );
            return { ...state, filteredData };
        })
        .addCase(deleteRow, (state, action) => {
            const rowId = action.payload;
            return {
                ...state,
                filteredData: state.filteredData.filter((row) => row['Part #'] !== rowId)
            };
        })
        .addCase(updateStock, (state, action) => {
            const { rowId, locAStock, locBStock } = action.payload;
            const rowIndex = state.filteredData.findIndex((row) => row['Part #'] === rowId);
            if (rowIndex !== -1) {
                const updatedRow = {
                    ...state.filteredData[rowIndex],
                    'LOCATION A STOCK': locAStock,
                    'LOC B STOCK ': locBStock,
                };
                const updatedData = [...state.filteredData];
                updatedData[rowIndex] = updatedRow;

                return {
                    ...state,
                    filteredData: updatedData,
                };
            }
            return state;
        })
        .addCase(importCSV, (state, action) => {
            const csvData = action.payload;
            return { ...state, data: csvData, filteredData: csvData };
        });
});

export default rootReducer;
