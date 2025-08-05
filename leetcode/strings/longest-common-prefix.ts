
// Problem: https://leetcode.com/problems/longest-common-prefix/?envType=problem-list-v2&envId=string
// Difficulty: Easy
// Topic: Strings


 function longestCommonPrefix(strs:string[]):string {
      if (!strs.length) return '';

    let initialWord = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(initialWord)) {
            initialWord = initialWord.slice(0, -1);
            if (initialWord === '') return '';
        }
    }

    return initialWord;
};