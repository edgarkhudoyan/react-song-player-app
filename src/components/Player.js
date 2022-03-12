import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
    console.log(audioRef.current);
  };
  return (
    <div className='player'>
      <div className='time-control'>
        <p>Start Time</p>
        <input type='range' />
        <p>End Time</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='skip-back' icon={faAngleLeft} size='2x' />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          icon={faPlay}
          size='2x'
        />
        <FontAwesomeIcon
          className='skip-forward'
          icon={faAngleRight}
          size='2x'
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
