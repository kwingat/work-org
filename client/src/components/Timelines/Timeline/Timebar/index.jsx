import '../../css/index.css';

import PropTypes from 'prop-types';
import Row from './Row';

const Timebar = ({ time = {}, rows = [] }) => {
  return (
    <div className="rt-timebar">
      {rows.map(({ id = '', title = '', cells, style }) => (
        <Row key={id} time={time} title={title} cells={cells} style={style} />
      ))}
    </div>
  );
};

export default Timebar;
