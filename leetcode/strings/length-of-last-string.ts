
// Problem:https://leetcode.com/problems/length-of-last-word/
// Difficulty: Easy
// Topic: Strings

function  lengthOfLastWord(s) {
    const strArr =  s.trim().split(' ')
    return strArr.at(-1).length
};