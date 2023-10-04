import './css/index.css';

import Sidebar from './Sidebar';
import Timeline from './Timeline';

// create default parameters for the Timelines component
const Timelines = ({ now, time, timebar, tracks }) => {
  return (
    <div className="rt-layout">
      <div className="rt-layout_side">
        <Sidebar />
      </div>
      <div className="rt-layout_main">
        <div className="rt-layout_timeline">
          <Timeline now={now} time={time} timebar={timebar} tracks={tracks} />
        </div>
      </div>
    </div>
  );
};

export default Timelines;
