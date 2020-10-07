"use strict";
exports.__esModule = true;
function Add(numbers) {
    var result = 0;
    if (!numbers) {
        return result;
    }
    var shouldChangeDelimiter = numbers.charAt(0) == '/' ? true : false;
    var delimiter = shouldChangeDelimiter ? numbers.charAt(3) : ',';
    console.log(delimiter);
    var numbersToProcess = shouldChangeDelimiter ? numbers.substring(5) : numbers;
    var replaceLinebreaksWithCommas = numbersToProcess.replace('\n', delimiter);
    var intNumbers = replaceLinebreaksWithCommas.split(delimiter).map(function (item) { return parseInt(item); });
    return intNumbers.reduce(function (a, b) { return a + b; });
}
exports.Add = Add;
