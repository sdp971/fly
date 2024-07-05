

const quiz = {
  questions: [
    {
      id: 1,
      question: 'Quelle est la plus grande planète du système solaire ?',
      backgroundColor: 'lightblue',
      answers: [
        {
          id: 1,
          text: 'Jupiter',
          score: 10,
          explanation: {
            text: 'Jupiter est en effet la plus grande planète du système solaire.',
            image: 'jupiter.jpg',
          },
        },
        {
          id: 2,
          text: 'Vénus',
          score: 0,
          explanation: {
            text: "Vénus n'est pas la plus grande planète du système solaire.",
            image: 'venus.jpg',
          },
        },
        {
          id: 3,
          text: 'Saturne',
          score: 1,
          explanation: {
            text: 'Saturne est une grande planète mais pas la plus grande du système solaire.',
            image: 'saturne.jpg',
          },
        },
      ],
    },
    {
      id: 2,
      question: 'Combien de continents y a-t-il sur Terre ?',
      backgroundColor: 'lightgreen',
      answers: [
        {
          id: 1,
          text: '5',
          score: 2,
          explanation: {
            text: 'Il y a en effet 5 continents sur Terre.',
            image: 'continents.jpg',
          },
        },
        {
          id: 2,
          text: '8',
          score: 0,
          explanation: {
            text: 'Non, il y a 5 continents sur Terre.',
            image: 'earth.jpg',
          },
        },
        {
          id: 3,
          text: '7',
          score: 0,
          explanation: {
            text: 'Il y a en fait 5 continents sur Terre.',
            image: 'world_map.jpg',
          },
        },
      ],
    },
    {
      id: 3,
      question: "Quel est l'animal terrestre le plus rapide ?",
      backgroundColor: 'lightyellow',
      answers: [
        {
          id: 1,
          text: 'Guépard',
          score: 2,
          explanation: {
            text: "Le guépard est en effet l'animal terrestre le plus rapide.",
            image: 'cheetah.jpg',
          },
        },
        {
          id: 2,
          text: 'Zèbre',
          score: 0,
          explanation: {
            text: "Le zèbre n'est pas l'animal terrestre le plus rapide.",
            image: 'zebra.jpg',
          },
        },
        {
          id: 3,
          text: 'Lion',
          score: 0,
          explanation: {
            text: "Le lion est rapide mais ce n'est pas l'animal terrestre le plus rapide.",
            image: 'lion.jpg',
          },
        },
      ],
    },
    {
      id: 4,
      question: 'Quel est le plus haut sommet du monde ?',
      backgroundColor: 'lightcoral',
      answers: [
        {
          id: 1,
          text: 'Mont Everest',
          score: 2,
          explanation: {
            text: 'Le Mont Everest est en effet le plus haut sommet du monde.',
            image: 'everest.jpg',
          },
        },
        {
          id: 2,
          text: 'Mont Kilimandjaro',
          score: 1,
          explanation: {
            text: "Le Mont Kilimandjaro est haut mais ce n'est pas le plus haut sommet du monde.",
            image: 'kilimanjaro.jpg',
          },
        },
        {
          id: 3,
          text: 'Mont Blanc',
          score: 0,
          explanation: {
            text: "Le Mont Blanc est le plus haut sommet d'Europe, mais ce n'est pas le plus haut du monde.",
            image: 'mont_blanc.jpg',
          },
        },
      ],
    },
    {
      id: 5,
      question: "Quelle est la capitale de l'Australie ?",
      backgroundColor: 'lightpink',
      answers: [
        {
          id: 1,
          text: 'Canberra',
          score: 2,
          explanation: {
            text: "Canberra est en effet la capitale de l'Australie.",
            image: 'canberra.jpg',
          },
        },
        {
          id: 1,
          text: 'Sidney',
          score: 0,
          explanation: {
            text: "Sydney n'est pas la capitale de l'Australie.",
            image: 'sydney.jpg',
          },
        },
      ],
    },
  ],
};
export default quiz;

