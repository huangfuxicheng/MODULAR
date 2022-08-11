//分别暴露
export const teacher1 = {
    name:'a'
}
//统一暴露
export const student1 = {
    name:'a'
}

const teacher2 ={
    name:'b'
}

const student2 ={
    name:'b'
}

export {teacher2,student2}
//默认暴露
export default {
    name:'c'
}