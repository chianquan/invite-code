/**
 * Created by sucaiquan on 2018/5/12.
 */
'use strict';
const assert = require('assert');
const _ = require('lodash');

module.exports = function(arrMap, len) {

    const map = {};
    const decodeMap = {};
    assert(len >= 3, 'len must great than or equal to 3.');
    assert(arrMap.length === 100, 'arr length must equal to 100.');
    const sortedArr = _.clone(arrMap).sort((a, b) => a - b);
    assert(sortedArr.length === 100, 'arr must be an 100 length arr and have 0-99 in it.');
    for (let i = 0; i < 100; i++) {
        assert(sortedArr[i] === i, 'arr must be an 100 length arr and have 0-99 in it.');
    }
    len--;
    for (let i = 0; i < 100; i++) {
        map[_.padStart(i, 2, '0')] = _.padStart(arrMap[i], 2, '0');
        decodeMap[_.padStart(arrMap[i], 2, '0')] = _.padStart(i, 2, '0');
    }
    return {
        encode: function(num) {
            num = parseInt(num, 10) || 0;
            num = num.toString();
            assert(num > 0, 'num should be a int great then 0.');
            let _len;
            if (num.length >= len) {
                _len = num.length;
            } else {
                num = _.padStart(num, len, 0);
                _len = len;
            }
            const arr = _.toArray(num);
            for (let i = 0; i < _len; i++) {
                const a = i % len;
                const b = (i + 1) % len;
                const c = (i + 2) % len;
                let tmp;

                //cover
                tmp = arr[a] + arr[b];
                tmp = map[tmp];
                arr[a] = tmp[0];
                arr[b] = tmp[1];

                //exchange
                tmp = arr[b];
                arr[b] = arr[c];
                arr[c] = tmp;
            }
            const sum = _.sum(_.map(arr, (n) => parseInt(n, 10)));
            arr.unshift((sum % 9 + 1).toString());//simple check number
            return _.join(arr, '');

        },
        decode: function(inviteCode) {
            const arr = _.toArray(inviteCode);
            let checkNum = parseInt(arr.shift(), 10);
            const sum = _.sum(_.map(arr, (n) => parseInt(n, 10)));
            if (sum % 9 + 1 !== checkNum) {
                return 0;
            }

            for (let i = arr.length - 1; i >= 0; i--) {
                const a = i % len;
                const b = (i + 1) % len;
                const c = (i + 2) % len;
                let tmp;

                //exchange
                tmp = arr[b];
                arr[b] = arr[c];
                arr[c] = tmp;

                //recover
                tmp = arr[a] + arr[b];
                tmp = decodeMap[tmp];
                arr[a] = tmp[0];
                arr[b] = tmp[1];
            }

            return parseInt(_.join(arr, ''), 10);
        }
    };
};