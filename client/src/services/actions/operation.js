import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteAllOperations = createAsyncThunk(
  'operation/deleteAllOperations',
  async () => {
    try {
      const response = await axios.delete('/api/operations');
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchOperations = createAsyncThunk(
  'operation/fetchOperations',
  async () => {
    try {
      const response = await axios.get('/api/operations');
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const insertOperation = createAsyncThunk(
  'operation/insertOperation',
  async (operation) => {
    try {
      const response = await axios.post('/api/operations', operation);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
);
