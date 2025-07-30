
// Problem: https://neetcode.io/problems/top-k-elements-in-list?list=neetcode150
// Difficulty: Medium
// Topic: Arrays

//my approach
function topKFrequent(nums, k) {
    const mapSet = new Map()

    for(const num of  nums){
         if(!mapSet.has(num)) mapSet.set(num,0)

         mapSet.set(num ,mapSet.get(num)+1)
    }
    
    return  Array.from(mapSet.entries()).sort((a,b)=>b[1]-a[1]).slice(0,k).map(ele=>ele[0])
        
    }

//time complexity - O(n log n)
//space complexity - O(n)
