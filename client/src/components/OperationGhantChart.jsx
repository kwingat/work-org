import PropTypes from 'prop-types';
import Timelines from './Timelines';
import createTime from '../helpers/time';
import { useState } from 'react';

// create material ui component for an operation ghant chart
const OperationGhantChart = ({ now, timebar, tracks }) => {
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
  console.log('OperationGhantChart:', scale);
  return (
    <div className="rt-ganttChart">
      <h1>Operation Ghant Chart</h1>
      <Timelines now={now} time={time} timebar={timebar} tracks={tracks} />
    </div>
  );
};

OperationGhantChart.propTypes = {
  scale: PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    zoom: PropTypes.number.isRequired,
    zoomMin: PropTypes.number,
    zoomMax: PropTypes.number,
    minWidth: PropTypes.number,
  }),
  timebar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
};

export default OperationGhantChart;
