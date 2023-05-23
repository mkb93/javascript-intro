const fizzBuzz = require('../js-intro/fizzBuzz.js');

describe('fizzBuzz', () => {
  test('returns fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  test('returns buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  test('returns 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
  test('returns FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  test('returns Fizz', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });
  test('returns Buzz', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });
});