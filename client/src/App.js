import "./App.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import OperationsInsert from "./components/OperationsInsert";
import React from "react";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <OperationsInsert />
    </LocalizationProvider>
  );
};

export default App;
