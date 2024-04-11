describe('Practice Week 1 - JS basic', function () {
  it('add function should return the total of x + y', function () {
    let test1 = add(5, 4);

    expect(test1).toEqual(9);

    expect(add(1, 1)).toEqual(2);
  });
});
it('checkExamResult', function () {
  let test1 = checkExamResult(90);

  expect(test1).toEqual('Pass');
  expect(checkExamResult(4)).toEqual('Fail');
});
it('sum', function () {
  let test1 = sum([1, 5, 7]);

  expect(test1).toEqual(13);
});
it('divide', function () {
  let test1 = divide(4, 2);

  expect(test1).toEqual(2);
});
it('addFromOneUntil', function () {
  let test1 = addFromOneUntil(5);

  expect(test1).toEqual(15);
});
it('minus', function () {
  let test1 = minus(5, 4);

  expect(test1).toEqual(1);
});
it('getAverage', function () {
  let test1 = getAverage(5, 5);

  expect(test1).toEqual(5);
});
it('getGrade', function () {
  let test1 = getGrade(75);

  expect(test1).toEqual('C');
});
it('getNumbersLargerThanTen', function () {
  let test1 = getNumbersLargerThanTen([5, 12, 8, 15, 3]);

  expect(test1).toEqual([12, 15]);
});
it('uniqueItems', function () {
  let test1 = uniqueItems([5, 5, 8, 15, 8]);

  expect(test1).toEqual([5, 8, 15]);
});
it('reverse', function () {
  let test1 = reverse([5, 5, 8, 15, 8]);

  expect(test1).toEqual([8, 15, 8, 5, 5]);
});
it('reverseSentence', function () {
  let test1 = reverse('Hello, world!');

  expect(test1).toEqual('!dlrow ,olleH');
});
it('uniqueInOrder', function () {
  let test1 = uniqueInOrder([1, 1, 3, 4, 4, 5]);

  expect(test1).toEqual([1, 3, 4, 5]);
});
