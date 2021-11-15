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

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(4, 7));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ジャケえ",
//   age: 28
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["ジャケえ", 28];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);

// sayHello();

/**
 * スプレッド構文
 */

//  配列の展開
// const attr = [1, 2];
// console.log(attr);
// console.log(...attr);

// const sumFunc = (num1, num2) => num1 + num2;
// console.log(sumFunc(attr[0],attr[1]));
// console.log(sumFunc(...attr));

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "ジャケぇ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2,

// const newNameArr = nameArr.map((name) => {
//   if (name === "ジャケぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側falseとなるとき、右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左がtrueなら右を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
