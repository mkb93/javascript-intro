const add = require('../js-intro/add.js');
const multiply = require('../js-intro/multiply.js');


describe('add', () => {
  test('to be 4' , () => {
    expect(add(2,2)).toBe(4);
  });
  test('to be 4' , () => {
    expect(multiply(2,2)).toBe(4);
  });
  it('to be 5' , () => {
    expect(multiply(1,5)).toBe(5);
  });

});