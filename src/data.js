export default [
  {
    type: 'genre',
    question: 'Выберите все джазовые песни',
    genre: 'jazz',
    answers: [
      {
        src: 'https://freemusicarchive.org/music/listen/d10182663330b3fadb944cbfc49a91b526cbd0a9',
        genre: 'jazz',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/fef7bc36c8953c80e7f8561b873ebe5f35d27fa7',
        genre: 'jazz',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/dfd277e04f2be3edb995bb618d0955ed6afa6c93',
        genre: 'pop',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/0c0b75cc14bdbbb264ae7ac7d1cce0f1425c0e5d',
        genre: 'pop',
      },
    ],
  },
  {
    type: 'genre',
    question: 'Выберите классику',
    genre: 'classical',
    answers: [
      {
        src: 'https://freemusicarchive.org/music/listen/d10182663330b3fadb944cbfc49a91b526cbd0a9',
        genre: 'jazz',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/ba2985df39aae1fdb987ac4532d7a5dfc0c002d0',
        genre: 'classical',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/b9318f3d59cd32e3e0ad89ce3f5656168cafd444',
        genre: 'country',
      },
      {
        src: 'https://freemusicarchive.org/music/listen/0c0b75cc14bdbbb264ae7ac7d1cce0f1425c0e5d',
        genre: 'pop',
      },
    ],
  },
  {
    type: 'artist',
    question: 'Кто исполняет эту песню?',
    src: 'https://freemusicarchive.org/music/listen/22d02e2f14b69735db8dbb9a3324bf6c61e20228',
    answers: [
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Lobo_Loco_-_20160509152923470.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Loco Loco',
        isCorrect: false,
      },
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Kevin MacLeod',
        isCorrect: true,
      },
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Quantum_Jazz_-_20120509113401114.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Quantum Jazz',
        isCorrect: false,
      },
    ],
  },
  {
    type: 'artist',
    question: 'Кто исполняет эту песню?',
    src: 'https://freemusicarchive.org/music/listen/d10182663330b3fadb944cbfc49a91b526cbd0a9',
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
          url: 'https://freemusicarchive.org/file/images/artists/Comfort_Fit_-_20091216190305442.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Comfort Fit',
        isCorrect: false,
      },
      {
        image: {
          url: 'https://freemusicarchive.org/file/images/artists/Jason_Shaw_-_20131120155444083.jpg?width=300&height=300',
          width: 300,
          height: 300,
        },
        title: 'Jason Shaw',
        isCorrect: false,
      },
    ],
  },
  // {
  //   type: 'artist',
  //   question: 'Кто исполняет эту песню?',
  //   src: 'https://freemusicarchive.org/music/listen/fef7bc36c8953c80e7f8561b873ebe5f35d27fa7',
  //   answers: [
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Paper Navy',
  //       isCorrect: false,
  //     },
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Stephan_Siebert_-_20160712113333691.jpg?width=300&height=300',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Stephan Siebert',
  //       isCorrect: true,
  //     },
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Waylon Thornton',
  //       isCorrect: false,
  //     },
  //   ],
  // },
  // {
  //   type: 'genre',
  //   question: 'Выберите все фолковые песни',
  //   genre: 'folk',
  //   answers: [
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/3c052bf45961dbe628908d2d3ecee885d5c66743',
  //       genre: 'rock',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/1177a3e0ac5f49e1abef21e47d18f2d17d922677',
  //       genre: 'electronic',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/0c66c477c71bc12e05d60261a5a45a59302c4c55',
  //       genre: 'folk',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/495684d492f4343c504cb08d7202b34705975d5e',
  //       genre: 'rock',
  //     },
  //   ],
  // },
  // {
  //   type: 'genre',
  //   question: 'Выберите все джазовые песни',
  //   genre: 'jazz',
  //   answers: [
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/d10182663330b3fadb944cbfc49a91b526cbd0a9',
  //       genre: 'jazz',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/0c66c477c71bc12e05d60261a5a45a59302c4c55',
  //       genre: 'folk',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/ba2985df39aae1fdb987ac4532d7a5dfc0c002d0',
  //       genre: 'classical',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/b9318f3d59cd32e3e0ad89ce3f5656168cafd444',
  //       genre: 'country',
  //     },
  //   ],
  // },
  // {
  //   type: 'artist',
  //   question: 'Кто исполняет эту песню?',
  //   src: 'https://freemusicarchive.org/music/listen/c04f0d0b5aaa2cb8b7448a13a9c6aa77eaf70016',
  //   answers: [
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Michael_Chapman__The_Woodpiles_-_2012081323009192.jpg?width=290&height=290',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Michael Chapman & The Woodpiles',
  //       isCorrect: true,
  //     },
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=300&height=300',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Kevin MacLeod',
  //       isCorrect: false,
  //     },
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Black_Math_-_20100122151057551.jpg?width=300&height=300',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Black Math',
  //       isCorrect: false,
  //     },
  //   ],
  // },
  // {
  //   type: 'genre',
  //   question: 'Выберите все фолковые песни',
  //   genre: 'folk',
  //   answers: [
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/0c66c477c71bc12e05d60261a5a45a59302c4c55',
  //       genre: 'folk',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/495684d492f4343c504cb08d7202b34705975d5e',
  //       genre: 'rock',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/3c052bf45961dbe628908d2d3ecee885d5c66743',
  //       genre: 'rock',
  //     },
  //     {
  //       src: 'https://freemusicarchive.org/music/listen/0c0b75cc14bdbbb264ae7ac7d1cce0f1425c0e5d',
  //       genre: 'pop',
  //     },
  //   ],
  // },
  // {
  //   type: 'artist',
  //   question: 'Кто исполняет эту песню?',
  //   src: 'https://freemusicarchive.org/music/listen/ba2985df39aae1fdb987ac4532d7a5dfc0c002d0',
  //   answers: [
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Lobo_Loco_-_20160509152923470.jpg?width=300&height=300',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Loco Loco',
  //       isCorrect: true,
  //     },
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/albums/Gillicuddy_-_Plays_Guitar_Again_-_20170725110900215.jpg?width=290&height=290',
  //         width: 290,
  //         height: 290,
  //       },
  //       title: 'Gillicuddy',
  //       isCorrect: false,
  //     },
  //     {
  //       image: {
  //         url: 'https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300',
  //         width: 300,
  //         height: 300,
  //       },
  //       title: 'Black Ant',
  //       isCorrect: false,
  //     },
  //   ],
  // },
];
