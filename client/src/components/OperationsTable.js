import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Table } from '@mui/joy';
import { fetchOperations } from '../services/actions/operations';
import { simpleDate } from '../helpers/dates';
import { useEffect } from 'react';

const OperationsTable = () => {
  const { operations = [] } = useSelector(
    (state) => state.operations,
    [shallowEqual],
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOperations());
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Operation Name</th>
          <th>Dev Complete</th>
          <th>UAT Start</th>
          <th>UAT Complete</th>
          <th>Implementation</th>
        </tr>
      </thead>
      <tbody>
        {operations.map((operation) => (
          <tr key={operation._id}>
            <td>{operation.name}</td>
            <td>{simpleDate(operation.devComp)}</td>
            <td>{simpleDate(operation.uatStart)}</td>
            <td>{simpleDate(operation.uatComp)}</td>
            <td>{simpleDate(operation.implement)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OperationsTable;
