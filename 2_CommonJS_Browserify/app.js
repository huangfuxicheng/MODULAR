// console.log(exports === module.exports)//
//引入的内容是什么，取决于暴露的是什么
//暴露的本质是module.exports的内容
//module.exports和exports不能混用，混用以module.exports为主
const module1 = require('./module')
const module2 = require('./module2')
const uniq = require('uniq')

module1.showData()
module1.showMsg()

module2.sum(2,3)
module2.sub(5,3)

console.log(module1);

const arr = [3,2,5,1,7,6]

console.log(uniq(arr))