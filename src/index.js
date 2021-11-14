/**
 * テンプレート文字列
 */

// const name = "ジャケえ";
// const age = 28;
// 「私の名前はジャケえです。年齢は28歳です。」

// 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

//  従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(4, 7));
