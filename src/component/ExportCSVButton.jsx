import React from 'react';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import { Button} from '@mui/material';

const ExportCSVButton = () => {
  const filteredData = useSelector((state) => state.filteredData);

  return (
    <CSVLink data={filteredData} filename="export.csv">
      <Button variant="contained">
        Export CSV
      </Button>
    </CSVLink>
  );
};

export default ExportCSVButton;
