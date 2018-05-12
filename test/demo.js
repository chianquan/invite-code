/**
 * Created by sucaiquan on 2018/5/13.
 */
'use strict';
//shuffle arr by [0,1,2...99]
//This is the random-style source config.
// Create your own shuffle arr .
// Keep no change.It Equivalent to your password.

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
const inviteCodeCreator = require('../index')(arr, 5);//make an creator by your config.the '5' is min length of your invite-code.
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


