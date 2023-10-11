import '../css/index.css';

import PropTypes from 'prop-types';
import Timebar from './Timebar';

const Header = ({ time, timebar }) => {
  //console.log('Header:', { timebar });
  return (
    <div>
      <div className={`rt-timeline__header`}>
        <div className="rt-timeline__header-scroll">
          <div>
            <Timebar time={time} rows={timebar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
