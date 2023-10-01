import { deleteAllOperations, fetchOperations } from '../actions/operations';

import { createSlice } from '@reduxjs/toolkit';
import { insertOperation } from '../actions/operation';

const initialState = {
  name: '',
  devComp: null,
  uatStart: null,
  uatComp: null,
  implement: null,
  operations: [],
};

const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setDevComp(state, action) {
      state.devComp = action.payload;
    },
    setUatStart(state, action) {
      state.uatStart = action.payload;
    },
    setUatComp(state, action) {
      state.uatComp = action.payload;
    },
    setImplement(state, action) {
      state.implement = action.payload;
    },
  },
  extraReducers: (operation) => {
    operation.addCase(insertOperation.fulfilled, (state, action) => {
      state.operations.push(action.payload);
    });
    operation.addCase(fetchOperations.fulfilled, (state, action) => {
      state.operations = action.payload;
    });
    operation.addCase(deleteAllOperations.fulfilled, (state, action) => {
      state.operations = [];
    });
  },
});

const { actions, reducer } = operationSlice;

export const { setName, setDevComp, setUatStart, setUatComp, setImplement } =
  actions;

export default reducer;
