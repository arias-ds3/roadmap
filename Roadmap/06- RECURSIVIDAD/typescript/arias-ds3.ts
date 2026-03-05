//!. Recursividad

function oneHundredToZero(count:number){
  if(count<0){
    return 0;
  }
  console.log(count)
oneHundredToZero(count-1);
}
function factorial(n: number):number {
  if (n <= 1) {
    console.log(n);
    return 1;
  }
  console.log(n);
  return n * factorial(n - 1);
}
function fibonacci(n: number):number {
  if (n <= 1) {
    return n;
  }
  let res = fibonacci(n - 1) + fibonacci(n - 2);
  return res;
}
