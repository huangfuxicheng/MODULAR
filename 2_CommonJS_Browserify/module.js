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
