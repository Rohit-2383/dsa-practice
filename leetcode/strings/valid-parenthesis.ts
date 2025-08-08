 
// Problem:https://leetcode.com/problems/valid-parentheses/?envType=problem-list-v2&envId=string
// Difficulty: Easy
// Topic: Strings

 function validParenthesis(s) {
        
  const stack:string[] = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
          stack.push(map[c])
        } else if (c !== stack.pop()) {
          return false;
        } 
    }
    return !stack.length;
}