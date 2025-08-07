
// Problem:https://leetcode.com/problems/valid-palindrome/?envType=problem-list-v2&envId=string
// Difficulty: Easy
// Topic: Strings

function isPalindrome(s:string):boolean {
     let str = ''
    for(const a of s.toLowerCase()){
         if((a.charCodeAt(0)>=97 && a.charCodeAt(0)<=122) 
         ||(a.charCodeAt(0) >= 48 && a.charCodeAt(0) <= 57)
         ){
             str += a
         }
    }
    return str === str.split('').reverse().join('')
}