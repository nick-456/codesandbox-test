/**
 * テンプレート文字列
 */

const name = "ジャケえ";
const age = 28;
// 「私の名前はジャケえです。年齢は28歳です。」

// 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);
