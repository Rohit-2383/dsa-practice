
// Problem: https://neetcode.io/problems/products-of-array-discluding-self?list=neetcode150
// Difficulty: Medium
// Topic: Arrays

//my approach

 function productExceptSelf(nums:number[]):number[] {

          if (!nums.length) return [];

      let len = 0
    const arr:number[] = []
     while(len<nums.length){
          const  product =  [
         ...nums.slice(0,len),
         ...nums.slice(len+1)
         ].reduce((acc,curr)=>acc*curr,1)
         len++
         arr.push(product)
     }
    
    return arr

    }

//time complexity - O(n2)
//space complexity - O(n)