import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const insertOperation = createAsyncThunk(
  "operation/insertOperation",
  async (operation) => {
    try {
      console.log({ operation });
      const response = await axios.post("/api/operations", operation);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
);
