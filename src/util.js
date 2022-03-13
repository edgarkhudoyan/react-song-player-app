import { v4 as uuidv4 } from 'uuid';

const ChillHop = () => {
  return [
    {
      name: 'Everyday',
      cover: 'https://i.scdn.co/image/ab67616d0000b27353b09005b0ac07d102b91b51',
      artist: 'chromonicci',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=30339',
      color: ['#205950', '#2ab3bf'],
      active: true,
      id: uuidv4(),
    },
    {
      name: 'Santiago',
      cover: 'https://i.scdn.co/image/ab67616d0000b273832ae84efad350c58132a1ad',
      artist: 'Psalm Trees, Moods',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=30202',
      color: ['#205950', '#2ab3bf'],
      active: false,
      id: uuidv4(),
    },
    {
      name: 'Ending',
      cover: 'https://i.scdn.co/image/ab67616d0000b273eaed420428f4881b7c6db265',
      artist: 'sadtoi, Raylae',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=28969"',
      color: ['#205950', '#2ab3bf'],
      active: false,
      id: uuidv4(),
    },
  ];
};

export default ChillHop;
