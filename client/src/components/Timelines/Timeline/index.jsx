import '../css/index.css';

import Header from './Header';

const Timeline = ({ time, timebar }) => {
  // console.log('Timeline:', timebar);
  return (
    <div className="rt-timeline">
      <Header time={time} timebar={timebar} />
    </div>
  );
};
export default Timeline;
