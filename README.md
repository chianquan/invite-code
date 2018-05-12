### invite-code
This is an util to create pure-number invite code by increase int number.
So that you don't need use the random and check if an invite code exists through db searching.

### feature
 - pseudorandom 伪随机
 - unique 保持唯一性
 - first number of invite-code is an check number 邀请码的第一个数字为简单的校验数
 - can decode the origin number 可以还原原始的生成数字
 - sparse 稀疏（一定情况下防止输错）

### install
```
npm install invite-code --save
```
### demo
```

//shuffle arr by [0,1,2...99] 这个数组来一个包含0-99的数组打乱后的数组
//This is the random-style source config.这是随机规整的来源
// Create your own shuffle arr .创建你自己的打乱的数组
// Keep no change.It Equivalent to your password.创建后就不要调整了，它相当于你的密码。
const arr = [
    18, 46, 10, 67, 99, 77, 16, 38, 39, 3,
    36, 87, 8, 89, 75, 60, 97, 15, 93, 22,
    21, 23, 7, 98, 26, 54, 91, 31, 84, 74,
    61, 49, 70, 50, 56, 85, 69, 79, 62, 59,
    33, 88, 86, 92, 71, 81, 83, 76, 2, 30,
    19, 27, 65, 68, 0, 41, 43, 17, 14, 52,
    95, 20, 34, 13, 42, 73, 82, 48, 47, 24,
    37, 35, 45, 51, 12, 72, 58, 53, 94, 78,
    5, 80, 1, 44, 9, 6, 25, 28, 29, 64,
    4, 40, 55, 32, 90, 57, 11, 66, 96, 63
];
//make an creator by your config.the '5' is min length of your invite-code.
//创建一个生成器，第二个参数'5'表示 创建的邀请码至少5位数字。
const inviteCodeCreator = require('invite-code')(arr, 5);
console.log(inviteCodeCreator.encode(1));//53820
console.log(inviteCodeCreator.encode(2));//53577
console.log(inviteCodeCreator.encode(3));//43252
console.log(inviteCodeCreator.encode(4));//73633
console.log(inviteCodeCreator.encode(100001));//9206801
console.log(inviteCodeCreator.encode(100002));//1206802
console.log(inviteCodeCreator.encode(100003));//2206803
console.log(inviteCodeCreator.encode(100004));//3206804
console.log(inviteCodeCreator.decode('53820'));//1
console.log(inviteCodeCreator.decode('9206801'));//100001
```

### Licence
MIT