"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function min(arr) {
    var minIndex = 0;
    for (var _i = 0, _a = Object.keys(arr); _i < _a.length; _i++) {
        var index = _a[_i];
        if (!arr[+index + 1]) {
            break;
        }
        if (arr[+index] < arr[minIndex]) {
            minIndex = +index;
        }
    }
    return minIndex;
}
function ReckonEditDistance(originStr, targetStr) {
    var originLen = originStr.length;
    var targetLen = targetStr.length;
    var matrix = new Array(originLen + 1)
        .fill(0)
        .map(function () { return new Array(targetLen + 1).fill(0); });
    var step = 0;
    for (var _i = 0, _a = Object.keys(originStr); _i < _a.length; _i++) {
        var index = _a[_i];
        matrix[+index + 1][0] = +index + 1;
    }
    for (var index in Object.keys(targetStr)) {
        matrix[0][+index + 1] = +index + 1;
    }
    for (var i = 1; i <= originLen; i++) {
        for (var j = 1; j <= targetLen; j++) {
            originStr[i - 1] === targetStr[j - 1] ? (step = 0) : (step = 1);
            var t = [
                matrix[i - 1][j - 1] + step,
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1
            ];
            var minIndex = min(t);
            matrix[i][j] = t[minIndex];
            if (step === 0) {
                continue;
            }
            console.info(minIndex);
            switch (minIndex) {
                case 0:
                    // console.info(`${i - 1} -> ${targetStr.charAt(j - 1)}`);
                    break;
                case 1:
                    console.info(originStr[i - 1], targetStr[j - 1]);
                    // console.info();
                    break;
                case 2:
                    // console.info();
                    break;
            }
        }
    }
    return matrix[originLen][targetLen];
}
exports.ReckonEditDistance = ReckonEditDistance;
console.info(ReckonEditDistance("hello", "world"));
