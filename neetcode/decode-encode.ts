
// Problem:https://neetcode.io/problems/string-encode-and-decode?list=neetcode150
// Difficulty: Medium
// Topic: Arrays

//my approach

    function encode(strs) {
         let encoded = ''
        for(const str of strs){
         encoded += str.length + '#' + str;
        }
        return encoded
    }

    function decode(str) {
        
      let count = 0
      let arrToReturn:string[] = []

        while(count<str.length){
            let innerCount = count

             while(str[innerCount]!=='#'){
                    innerCount++
             }

            let wordLength = parseInt(str.slice(count,innerCount))
             arrToReturn.push(str.slice(innerCount + 1, innerCount + 1 + wordLength));
        count = innerCount + 1 + wordLength;
        }

        return arrToReturn

    }
