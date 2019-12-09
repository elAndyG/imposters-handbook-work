const quickSort = (list: any[]): any[] => {
  if (list.length < 2) return list; // just make sure we dont make an infinite loop

  let left = [];
  let right = [];

  const pivot = list.length - 1;
  const pivotValut = list[pivot];
  list = list.slice(0, pivot).concat(list.slice(pivot + 1)); // removing the pivot

  for (let i = 0; i < list.length; i++) {
    list[i] < pivotValut ? left.push(list[i]) : right.push(list[i]);
  }
  return quickSort(left).concat([pivotValut], quickSort(right));
};

describe('quick sort', () => {
  it('quick sorts', () => {
    const list = [23, 4, 42, 15, 16, 8, 3];
    const result = quickSort(list);
    expect(() => result[0] < result[1]).toBeTruthy();
    expect(() => result[1] < result[2]).toBeTruthy();
    expect(() => result[2] < result[3]).toBeTruthy();
    expect(() => result[3] < result[4]).toBeTruthy();
    expect(() => result[4] < result[5]).toBeTruthy();
  });
});
