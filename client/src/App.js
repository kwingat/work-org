import './App.css';

import { SnackbarContent, SnackbarProvider } from 'notistack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import OperationInsert from './components/OperationInsert';
import OperationsTable from './components/OperationsTable';
import React from 'react';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider>
        <OperationInsert />
        <OperationsTable />
      </SnackbarProvider>
    </LocalizationProvider>
  );
};

export default App;
