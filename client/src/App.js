import './App.css';

import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import OperationGhantChart from './components/OperationGhantChart';
import OperationInsert from './components/OperationInsert';
import OperationsTable from './components/OperationsTable';
import { SnackbarProvider } from 'notistack';
import { fetchOperations } from './services/actions/operations';

const App = () => {
  const { operations = [] } = useSelector(
    (state) => state.operations,
    [shallowEqual],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOperations());
  }, [dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider preventDuplicate="true">
        <OperationInsert />
        <OperationsTable />
        {operations.length === 0 ? (
          <div className="alert alert-info">
            <strong>Info!</strong> No operations yet.
          </div>
        ) : (
          <OperationGhantChart operations={operations} />
        )}
      </SnackbarProvider>
    </LocalizationProvider>
  );
};

export default App;
