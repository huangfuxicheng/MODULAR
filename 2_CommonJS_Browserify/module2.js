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
