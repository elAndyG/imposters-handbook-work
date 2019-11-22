import { add } from './test';

describe('add', () => {
  it('should add two values together', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});
