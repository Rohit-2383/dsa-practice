

// Problem:https://leetcode.com/problems/isomorphic-strings/?envType=problem-list-v2&envId=string
// Difficulty: Easy
// Topic: Strings

 function isIsomorphic(s:string, t:string):boolean {
      if (s.length !== t.length) return false;
    
    let mappedStr1 = {};
    let mappedStr2 = {};

    for (let i = 0; i < s.length; i++) {
        const value1 = s[i];
        const value2 = t[i];

        if ((mappedStr1[value1] && mappedStr1[value1] !== value2) ||
            (mappedStr2[value2] && mappedStr2[value2] !== value1)) {
            return false;
        }

        mappedStr1[value1] = value2;
        mappedStr2[value2] = value1;
    }
    
    return true
};