const path=require('path')
console.log(path.sep)
 const filepath=path.join('2mod','test.txt')
 console.log(filepath)
 const base=path.basename(filepath)
 console.log(base)
 const absolute=path.resolve('__dirname','2mode','test.txt')
 console.log(absolute)