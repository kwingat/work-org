import {
  buildTimebar,
  getEarliestStart,
  getLatestEnd,
} from '../helpers/builder';

import PropTypes from 'prop-types';
import Timelines from './Timelines';
import createTime from '../helpers/time';
import { useState } from 'react';

// create material ui component for an operation ghant chart
const OperationGhantChart = ({ operations }) => {
  const to = getEarliestStart(operations);
  const from = getLatestEnd(operations);
  const now = new Date();

  const timebar = buildTimebar(to, from);

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
  const scale = {
    start: new Date(2022, 1, 1),
    end: new Date(2024, 12, 31),
    zoom: 2,
    zoomMin: 1,
    zoomMax: 10,
    minWidth: 20,
  };
  const [time, setTime] = useState(
    createTime({ ...scale, viewportWidth: 1000 }),
  );
  return (
    <div className="rt-ganttChart">
      <h1>Operation Ghant Chart</h1>
      <Timelines now={now} time={time} timebar={timebar} tracks={tracks} />
    </div>
  );
};

export default OperationGhantChart;
