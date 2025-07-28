
// Problem: https://neetcode.io/problems/two-integer-sum?list=neetcode150
// Difficulty: Easy
// Topic: Arrays

//my approach
    function twoSum(nums:number[], target:number) {

        if(!nums.length) return []

        const mapNum = new Map()

        for (let i = 0 ; i<nums.length ; i++){

            const value = target - nums[i]
            
            if(mapNum.has(value)) return [mapNum.get(value),i]
            
            mapNum.set(nums[i],i)
        }
    }

     //time complexity - O(n)
    //space complexity - O(n)

