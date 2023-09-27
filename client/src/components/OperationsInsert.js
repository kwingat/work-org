import {
  CssVarsProvider,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from "@mui/joy";

import { DatePicker } from "@mui/x-date-pickers";

const OperationsInsert = () => {
  return (
    <main>
      <Sheet>
        <div>
          <Typography>
            <b>Add Operation</b>
          </Typography>
        </div>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input name="name" type="text" placeholder="Simple Amendment" />
        </FormControl>
        <FormControl>
          <FormLabel>Dev Completion</FormLabel>
          <DatePicker name="devComp" />
        </FormControl>
        <FormControl>
          <FormLabel>UAT Start</FormLabel>
          <DatePicker name="uatStart" />
        </FormControl>
        <FormControl>
          <FormLabel>UAT Completion</FormLabel>
          <DatePicker name="uatComp" />
        </FormControl>
        <FormControl>
          <FormLabel>Implement</FormLabel>
          <DatePicker name="implement" />
        </FormControl>
      </Sheet>
    </main>
  );
};

export default OperationsInsert;
