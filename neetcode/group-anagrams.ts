

// Problem: https://neetcode.io/problems/anagram-groups?list=neetcode150
// Difficulty: Medium
// Topic: Arrays

//my approach
function GroupAnagrams(strs:string[]){

    if(!strs.length) return []

    const mapStr = new Map()

    for(const str of strs){
        const value = str.split('').sort().join('')
        if(!mapStr.has(value)) mapStr.set(value,[])

         mapStr.get(value).push(str)
          
    }
    return Array.from(mapStr.values()) 
}

//time complexity - O(n · k log k)
//space complexity - O(n · k)


// __________________________________________________________________________________________________________________________


//optimal solution  - from platform

function groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }


    //time complexity - O(m*n)
    //space complexity - O(m*n)
