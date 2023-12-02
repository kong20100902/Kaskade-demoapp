/* let res = 0;

const promiseA = new Promise((resolve, reject) => {
  for(let i = 0; i <= 1_000_000_000; i++){
        res += i;
  }
  resolve(res);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val)).catch()
console.log("immediate logging");
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '1');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '2');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10000, '3');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});