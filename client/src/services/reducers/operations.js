import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  devComp: null,
  uatStart: null,
  uatComp: null,
  implement: null,
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
});
export const { setName, setDevComp, setUatStart, setUatComp, setImplement } =
  operationSlice.actions;
export default operationSlice.reducer;
