
// Problem: https://neetcode.io/problems/is-anagram?list=neetcode150
// Difficulty: Easy
// Topic: Arrays

//my approach
function isAnagram(s:string,t:string):boolean{
    if(s.length !==t.length) return false

        const sorted = (str)=>str.split('').sort().join('')

        return sorted(t) === sorted(s)
}

//time complexity - O(n log n)
//space complexity - O(n)


// __________________________________________________________________________________________________________________________


// optimal solution
function isAnagramOptimal(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    return count.every((ele) => ele === 0);
}

//time complexity - O(n)
//space complexity - O(1)

