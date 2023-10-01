import './App.css';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import OperationInsert from './components/OperationInsert';
import OperationsTable from './components/OperationsTable';
import React from 'react';
import { deleteAllOperations } from './services/actions/operations';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  onclick = (e) => {
    e.preventDefault();
    // dispatch(deleteAllOperations());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <OperationInsert />
      <OperationsTable />
      {/* <button onClick={(e) => onclick(e)}>Delete Everything</button> */}
    </LocalizationProvider>
  );
};

export default App;
