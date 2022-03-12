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
      name: 'Typical Midnight',
      cover:
        'https://chillhop.com/wp-content/uploads/2022/02/6b1cd792e2d88c65108a3c3b7ed48407b6f65bf8-1024x1024.jpg',
      artist: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=31516',
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
