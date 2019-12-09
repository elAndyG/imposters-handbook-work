// need two routines. 1 for splitting, 1 for merging

const merge = (left: any[], right: any[]) => {
  let result = [];
  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
};

const mergeSort = (list: any[]): any[] => {
  if (list.length <= 1) return list;
  const middle = list.length / 2;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
};

describe('merge sort', () => {
  it('merge sorts', () => {
    const list = [23, 4, 42, 15, 16, 8, 3];
    const result = mergeSort(list);
    expect(() => result[0] < result[1]).toBeTruthy();
    expect(() => result[1] < result[2]).toBeTruthy();
    expect(() => result[2] < result[3]).toBeTruthy();
    expect(() => result[3] < result[4]).toBeTruthy();
    expect(() => result[4] < result[5]).toBeTruthy();
  });
});
