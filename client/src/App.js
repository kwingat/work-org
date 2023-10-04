import './App.css';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import OperationGhantChart from './components/OperationGhantChart';
import OperationInsert from './components/OperationInsert';
import OperationsTable from './components/OperationsTable';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import { buildTimebar } from './helpers/builder';

const App = () => {
  const now = new Date();
  const timebar = buildTimebar();
  //sameple data for tracks
  const tracks = [
    {
      id: 1,
      name: 'Track 1',
      operations: [
        {
          id: 1,
          name: 'Operation 1',
          start: new Date(now.getFullYear(), now.getMonth(), 1),
          end: new Date(now.getFullYear(), now.getMonth(), 3),
        },
        {
          id: 2,
          name: 'Operation 2',
          start: new Date(now.getFullYear(), now.getMonth(), 5),
          end: new Date(now.getFullYear(), now.getMonth(), 7),
        },
        {
          id: 3,
          name: 'Operation 3',
          start: new Date(now.getFullYear(), now.getMonth(), 10),
          end: new Date(now.getFullYear(), now.getMonth(), 12),
        },
      ],
    },
    {
      id: 2,
      name: 'Track 2',
      operations: [
        {
          id: 4,
          name: 'Operation 4',
          start: new Date(now.getFullYear(), now.getMonth(), 1),
          end: new Date(now.getFullYear(), now.getMonth(), 3),
        },
        {
          id: 5,
          name: 'Operation 5',
          start: new Date(now.getFullYear(), now.getMonth(), 5),
          end: new Date(now.getFullYear(), now.getMonth(), 7),
        },
        {
          id: 6,
          name: 'Operation 6',
          start: new Date(now.getFullYear(), now.getMonth(), 10),
          end: new Date(now.getFullYear(), now.getMonth(), 12),
        },
      ],
    },
  ];
  console.log('App', timebar);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider preventDuplicate="true">
        <OperationInsert />
        <OperationsTable />
        <OperationGhantChart now={now} timebar={timebar} tracks={tracks} />
      </SnackbarProvider>
    </LocalizationProvider>
  );
};

export default App;
