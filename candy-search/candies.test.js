const searchCandies = require('./candies.js');

describe('searchCandies', () => {
  test('return 2 items', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars','Maltesers'])
  });
  test('return 1 items', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  });
  test('return 3 items', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });
  test('return 2 items starting with s', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles'])
  });
  test('return 2 items starting with s', () => {
    expect(searchCandies('s', 4)).toEqual([ 'Skitties', 'Skittles'])
  });
})