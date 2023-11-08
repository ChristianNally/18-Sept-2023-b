const highScores = [
  {
    id: 1,
    name: 'alice',
    points: 15
  },
  {
    id: 2,
    name: 'bob',
    points: 10
  },
  {
    id: 3,
    name: 'carol',
    points: 5
  },
];

const axios = {
  get: jest.fn((url) => {
    if (url === '/high-scores') {
      return Promise.resolve({
        data: highScores
      });
    }
  })
};

export default axios;
