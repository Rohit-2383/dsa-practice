
// Problem: https://neetcode.io/problems/duplicate-integer?list=neetcode150
// Difficulty: Easy
// Topic: Arrays

//my approach
function containsDuplicate(nums:number[]):boolean{
    const setStore = new Set()

    for(const num of nums){

         if(setStore.has(num)) return true

          setStore.add(num)
    }
    return false
}

//time complexity - O(n)
//space complexity - O(n)
