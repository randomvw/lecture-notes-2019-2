const math = require('./math');

describe('Add function', () => {
  it('should add two positive integers', () => {
    // Actual
    let actual = math.add(2, 3);

    expect(actual).toBe(5);
  });

  it('should add two negative integers', () => {
    expect(math.add(-2, -3)).toBe(-5);
  });

  it('should add a potive and a negative integer', () => {
    expect(math.add(-2, 3)).toBe(1);
  });
});

describe('Multiply function', () => {
  it('Should multiply two positive integers', () => {
    let actual = math.multiply(2, 3);
    expect(actual).toBe(6);
  });
});