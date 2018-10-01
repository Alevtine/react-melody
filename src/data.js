
export default const gameData = [
  {
    type: 'artist',
    question: 'Кто исполняет эту песню?',
    src: 'https://freemusicarchive.org/music/listen/c66a7fa35aba8a8e569ba2db15c227826d68742c',
    answers: [
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Quantum_Jazz_-_20120509113401114.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Quantum Jazz',
        isCorrect: true,
      },
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Paper Navy',
        isCorrect: false,
      },
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Black_Math_-_20100122151057551.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Black Math',
        isCorrect: false,
      },
    ],
  },
  {
    type: 'genre',
    question: 'Выберите все хип-хоп песни',
    genre: 'hip-hop',
    answers: [
      {
        src: 'https://freemusicarchive.org/music/listen/59e542ddc63fd56a0eac909fefac9ef55470ca01',
        genre: 'pop',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/55dd5e65941dfc69fffec8f9b57eb68d5aca1a49',
        genre: 'folk',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/9ff7251732d193902d427c71e32af031282e099f',
        genre: 'hip-hop',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/485a85c025f66dfad343c8ca0eb0a8931b0761dd',
        genre: 'country',
      },
    ],
  },
  {
    type: 'genre',
    question: 'Выберите все кантри песни',
    genre: 'country',
    answers: [
      {
        src: 'https://freemusicarchive.org/music/listen/97a2436570a767f5899d2ea34811c011293a6ba6',
        genre: 'blues',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/022e9fad2cf40e495bc8db40f8ebfde6429efc7f',
        genre: 'classical',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/485a85c025f66dfad343c8ca0eb0a8931b0761dd',
        genre: 'country',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/c66a7fa35aba8a8e569ba2db15c227826d68742c',
        genre: 'jazz',
      },
    ],
  },
  {
    type: 'artist',
    question: 'Кто исполняет эту песню?',
    src: 'https://freemusicarchive.org/music/listen/d44a0a500a88225a1220976a33a88abe24ed4830',
    answers: [
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Michael_Chapman__The_Woodpiles_-_2012081323009192.jpg?width=290&height=290',
          width: 300,
          height: 300,
        },
        title: 'Michael Chapman & The Woodpiles',
        isCorrect: true,
      },
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Kevin MacLeod',
        isCorrect: false,
      },
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Waylon Thornton',
        isCorrect: false,
      },
    ],
  },
];
