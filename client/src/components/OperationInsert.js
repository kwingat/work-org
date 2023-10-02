import { FormControl, FormLabel, Input, Sheet, Typography } from '@mui/joy';
import {
  setDevComp,
  setImplement,
  setName,
  setUatComp,
  setUatStart,
} from '../services/reducers/operation';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Fragment } from 'react';
import React from 'react';
import dayjs from 'dayjs';
import { insertOperation } from '../services/actions/operation';
import { simpleDate } from '../helpers/dates';
import { useSnackbar } from 'notistack';

const OperationsInsert = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { name, devComp, uatStart, uatComp, implement } = useSelector(
    (state) => state.operations,
  );

  const submitAdd = (e) => {
    if (!name) {
      console.log('Please enter a name');
      enqueueSnackbar('Please enter a name');
      return;
    }
    dispatch(insertOperation({ name, devComp, uatStart, uatComp, implement }));
  };

  const onChange = (e) => {
    e.preventDefault();
    const { name = '', value = '' } = e;

    switch (name) {
      case 'name':
        dispatch(setName(value));
        break;
      case 'devComp':
        dispatch(setDevComp(value));
        break;
      case 'uatStart':
        dispatch(setUatStart(value));
        break;
      case 'uatComp':
        dispatch(setUatComp(value));
        break;
      case 'implement':
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
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
        <div>
          <Typography>
            <b>Add Operation</b>
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
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
              defaultValue={simpleDate(dayjs())}
              value={dayjs(devComp)}
              onChange={(e) => onChange({ name: 'devComp', value: getDate(e) })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>UAT Start</FormLabel>
            <DatePicker
              name="uatStart"
              defaultValue={simpleDate(dayjs())}
              value={dayjs(uatStart)}
              onChange={(e) =>
                onChange({ name: 'uatStart', value: getDate(e) })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>UAT Completion</FormLabel>
            <DatePicker
              name="uatComp"
              defaultValue={simpleDate(dayjs())}
              value={dayjs(uatComp)}
              onChange={(e) => onChange({ name: 'uatComp', value: getDate(e) })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Implement</FormLabel>
            <DatePicker
              name="implement"
              defaultValue={simpleDate(dayjs())}
              value={dayjs(implement)}
              onChange={(e) =>
                onChange({
                  name: 'implement',
                  value: getDate(e),
                })
              }
            />
          </FormControl>
          <Button
            onClick={(e) => enqueueSnackbar('Please enter a name')}
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
