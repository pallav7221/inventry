import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { importCSV } from '../redux/actions';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const UploadButton = styled(Button)({
  width: '127px',
});

const CSVUpload = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const csvData = parseCSV(reader.result);
      dispatch(importCSV(csvData));
    };

    reader.readAsText(file);
  };

  const parseCSV = (csvString) => {
    const lines = csvString.split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });

    return data;
  };

  return (
    <div>
      <UploadButton
        variant="contained"
        component="label"
        htmlFor="csv-upload"
      >
        Upload CSV
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
      </UploadButton>
    </div>
  );
};

export default CSVUpload;
