//题目描述
//写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，既是3的倍数又是5的倍数打印“FizzBuzz”。
function fizzbuzz(){
  for (var i = 1; i <= 100; i++) { 
      if (i % 15 === 0) {
          console.log('FizzBuzz');
      } 
      else if (i % 3 === 0) {
          console.log('Fizz');
      } 
      else if (i % 5 === 0) {
          console.log('Buzz');
      } 
      else {
          console.log(i);
      }
  }
}
