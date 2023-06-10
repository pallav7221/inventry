import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchInput = ({ onSearch }) => {
  const [searchString, setSearchString] = useState('');

  const handleChange = (event) => {
    setSearchString(event.target.value);
    if (event.target.value.length >= 3) {
      onSearch(event.target.value);
    }
  };

  return (
    <TextField
      label="Search"
      value={searchString}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
