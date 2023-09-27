import { FormControl, FormLabel, Input, Sheet, Typography } from "@mui/joy";
import {
  setDevComp,
  setImplement,
  setName,
  setUatComp,
  setUatStart,
} from "../services/reducers/operations";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Fragment } from "react";
import dayjs from "dayjs";
import { get } from "lodash";

const OperationsInsert = () => {
  const { name, devComp, uatStart, uatComp, implement } = useSelector(
    (state) => state.operations,
  );
  const dispatch = useDispatch();

  const submitAdd = async (e) => {};
  const onChange = (e) => {
    const { name = "", value = "" } = e;

    switch (name) {
      case "name":
        dispatch(setName(value));
        break;
      case "devComp":
        dispatch(setDevComp(value));
        break;
      case "uatStart":
        dispatch(setUatStart(value));
        break;
      case "uatComp":
        dispatch(setUatComp(value));
        break;
      case "implement":
        dispatch(setImplement(value));
        break;
      default:
        break;
    }
  };

  const getDate = (e) => {
    const { $M, $D, $y } = e;
    return `${$M}/${$D}/${$y}`;
  };

  return (
    <Fragment>
      <Sheet
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <div>
          <Typography>
            <b>Add Operation</b>
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="Simple Amendment"
              value={name}
              onChange={(e) =>
                onChange({ name: e.target.name, value: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Dev Completion</FormLabel>
            <DatePicker
              name="devComp"
              value={dayjs(devComp)}
              onChange={(e) => onChange({ name: "devComp", value: getDate(e) })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>UAT Start</FormLabel>
            <DatePicker
              name="uatStart"
              value={dayjs(uatStart)}
              onChange={(e) =>
                onChange({ name: "uatStart", value: getDate(e) })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>UAT Completion</FormLabel>
            <DatePicker
              name="uatComp"
              value={dayjs(uatComp)}
              onChange={(e) => onChange({ name: "uatComp", value: getDate(e) })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Implement</FormLabel>
            <DatePicker
              name="implement"
              value={dayjs(implement)}
              onChange={(e) =>
                onChange({
                  name: "implement",
                  value: getDate(e),
                })
              }
            />
          </FormControl>
          <Button
            onClick={(e) => submitAdd(e)}
            variant="contained"
            color="primary"
            sx={{ mt: 1 }}
          >
            Add
          </Button>
        </div>
      </Sheet>
    </Fragment>
  );
};

export default OperationsInsert;
