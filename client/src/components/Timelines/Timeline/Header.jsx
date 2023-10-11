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

// Header.propTypes = {
//   time: PropTypes.shape({}).isRequired,
//   timebar: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string,
//     }).isRequired,
//   ).isRequired,
//   //   onMove: PropTypes.func.isRequired,
//   //   onEnter: PropTypes.func.isRequired,
//   //   onLeave: PropTypes.func.isRequired,
//   //   width: PropTypes.string.isRequired,
//   //   sticky: PropTypes.shape({
//   //     isSticky: PropTypes.bool.isRequired,
//   //     setHeaderHeight: PropTypes.func.isRequired,
//   //     viewportWidth: PropTypes.number.isRequired,
//   //     handleHeaderScrollY: PropTypes.func.isRequired,
//   //     scrollLeft: PropTypes.number.isRequired,
//   //   }),
// };

export default Header;
