import { useState } from 'react';
// Import Components
import Song from './components/Song';
import Player from './components/Player';
// Import Styles
import './styles/app.scss';
// Import Util
import data from './util';

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
};

export default App;
