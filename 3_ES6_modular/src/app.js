

//引入【分别暴露】的模块
import {data,showData,showMsg}from './module1'
//引入【分别暴露】的模块+重命名
import {data as data2}from './module2'
//引入【分别暴露】的模块+打包引入
import * as module1 from './module1'
//引入【统一暴露】的模块
import {dog,person}from './module3'
//引入【默认暴露】的模块
import dog1  from './module4'
import module5,{teacher2,teacher1,student2,student1} from "./module5";
console.log(teacher2,teacher1,student2,student1,module5)