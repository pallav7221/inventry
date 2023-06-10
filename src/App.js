import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search, deleteRow, updateStock } from './redux/actions';
import DeleteDialog from './component/DeleteDialog';
import SearchInput from './component/SearchInput';
import CSVUpload from './component/CSVUpload';
import CustomTable from './component/CustomTable';
import ExportCSVButton from './component/ExportCSVButton';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  display: 'flex',
  gap: '10px',
  marginBottom: "20px"
});

const Heading = styled('h2')({
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '20px 0',
  textAlign: 'center',
});

const App = () => {
  const filteredData = useSelector((state) => state.filteredData);
  const deleteDialogOpen = useSelector((state) => state.deleteDialogOpen);
  const dispatch = useDispatch();

  const handleSearch = (searchString) => {
    dispatch(search(searchString));
  };

  const handleDeleteRow = (rowId) => {
    dispatch(deleteRow(rowId));
  };

  const handleUpdateStock = useCallback((rowId, locAStock, locBStock) => {
    dispatch(updateStock({ rowId, locAStock, locBStock }));
  }, [dispatch])

  return (
    <div>
      <Heading>Inventory</Heading>
      <Container>
        <SearchInput onSearch={handleSearch} />
        <CSVUpload />
        <ExportCSVButton />
      </Container>
      <CustomTable
        data={filteredData}
        onDeleteRow={handleDeleteRow}
        onUpdateStock={handleUpdateStock}
      />
      <DeleteDialog open={deleteDialogOpen} />
    </div>
  );
};

export default App;
