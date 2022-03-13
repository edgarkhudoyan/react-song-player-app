import { useState } from 'react';
// Import Components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
// Import Styles
import './styles/app.scss';
// Import Util
import data from './util';

const App = () => {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} />
    </div>
  );
};

export default App;
