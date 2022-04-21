/*

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216

*/

function perimeter(n) {
  let fib = [0, 1];
  let data = [];

  for (let i = 1; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    data.push(fib[i]);
  }

  let array = [0, 1].concat(data);
  let sumArray = array.reduce((a, c) => a + c, 0);

  return sumArray * 4;
}

perimeter(6);

/*
function perimeter(n) {
  let arr = [1, 1];
  for (let i = 0; i < n - 1; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return 4 * arr.reduce((sum, num) => sum + num, 0);
}

perimeter(5);
*/

/*
function perimeter(n) {
  const a = [1, 1];
  let sum = 2;
  for (let i = 2; i <= n; i++) {
    const next = a[i-2] + a[i-1];
    sum += next;
    a.push(next);
  }
  return 4 * sum;
}
*/
