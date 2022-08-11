(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module":2,"./module2":3,"uniq":4}],2:[function(require,module,exports){
//使用module.exports = xxx暴露，xxx就是暴露的内容

const data = 'one'

const msg = 'the number one'

module.exports.a = function showData(){
    console.log(data);
}

module.exports= function(){
    console.log(data);
}
module.exports = {
    showData(){
        console.log(data);
    },
    showMsg(){
        console.log(msg);
    }
}

function showMsg(){
    console.log(msg);
}

exports.x = 100

},{}],3:[function(require,module,exports){
//module2使用exports.xxx = value暴露，value就是暴露的内容,xxx是名字
exports.data = 'two'

exports.msg = 'the number two'

function sum(a,b){
    console.log(a + b);
}
exports.sub = function(a,b){
    console.log(a - b);
}

exports.sum = sum

},{}],4:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
