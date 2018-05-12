/**
 * Created by sucaiquan on 2018/5/12.
 */
'use strict';
const _ = require('lodash');
const inviteCodeCreator = require('../index');
const assert = require('assert');

const arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i;
}
const inviteCodeFun = inviteCodeCreator(_.shuffle(arr), 3);
console.time('create 10000 inviteCode cost');
for (let i = 1; i <= 10000; i++) {
    let inviteCode = inviteCodeFun.encode(i);
    let inviteCodeOrigin = inviteCodeFun.decode(inviteCode);
    assert(i === inviteCodeOrigin, 'inviteCode decode error:' + i);
}
console.timeEnd('create 10000 inviteCode cost');
console.log('success!');