import '../../css/index.css';

import Cell from './Cell';
import PropTypes from 'prop-types';

const Row = ({ time, cells, style }) => (
  <div className="rt-timebar__row" style={style}>
    {cells.map((cell) => (
      <Cell key={cell.id} time={time} {...cell} />
    ))}
  </div>
);

// Row.propTypes = {
//   time: PropTypes.shape({}).isRequired,
//   cells: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   style: PropTypes.shape({}),
// };

export default Row;
