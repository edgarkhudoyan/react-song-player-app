// Import Components
import Song from './components/Song';
import Player from './components/Player';
// Import Styles
import './styles/app.scss';

const App = () => {
  return (
    <div className='App'>
      <Song />
      <Player />
    </div>
  );
};

export default App;
