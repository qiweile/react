// var mainDiv = document.getElementById('main');
// var div = document.createElement('div');
// mainDiv.appendChild(div);
// var span = document.createElement('span');
// div.appendChild(span);
// span.innerHTML = '我是中国人'; 


// 用来创建工作
import React from 'react';
// 用来操作元素的
import ReactDOM from 'react-dom';

import {setInterval} from 'timers';

var time = 1000;
setInterval(function(){
    time --;
    //jsx语法中为了规避js关键字，属性里面的class要用className
    // 代替，label的for属性，要用htmlFor代替
    var div = <div className="aa">
    {     // 这是一个回调箭头函数 
        (()=>{
            if(time%2 == 0){
                return <h5>{ time }</h5>
            }else{
                return <h1>{ time }</h1>
            }
        })()
    }
    </div>;
    ReactDOM.render(div, document.getElementById('main'));
    
}, 1000)








// 用来创建一个元素。参数1 要创建元素的标签
// 2：参数创建元素的属性 参数：3 标签的子元素
// var span = React.createElement('span',{},'我是中国人');
// var div = React.createElement('div',{id:'dv'},'我们是炎黄子孙',span);
// var country = '中国';

// function sayHello(){
//     return'你好'
// }

// jsx语法
// var div = (< div id = 'dv'name = "div" >
//             我们是炎黄子孙 
//             < span > 
//                 我们是{sayHello()}人 
//             < /span>
//           </div >);

// // {
//     name:'tr',
//     chidren:[
//         {name:'td',chidren:'1'},
//         {name:'td',chidren:'2s'}
//     ]
// }
// {
//     name:'tr',
//     chidren:[
//         {name:'td',chidren:'1'},
//         {name:'td',chidren:'2s'}
//     ]
// }







// 将react元素渲染到页面上
// 参数1要渲染到页面上的react元素
// 参数2页面上的原生DOM
// 参数3回调函数
