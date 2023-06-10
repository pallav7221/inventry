
import { createAction } from '@reduxjs/toolkit';

export const search = createAction('SEARCH');
export const deleteRow = createAction('DELETE_ROW');
export const updateStock = createAction('UPDATE_STOCK');
export const importCSV = createAction('IMPORT_CSV');
