const {readFileSync,writeFileSync}=require('fs')
const test=readFileSync('./test.txt','utf8')
const second=readFileSync('./second.txt','utf8')
console.log(test,second)
writeFileSync('./third.txt',`result is  :${test},${second}`,{flag:'a'})