import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //样式
    element.classList.add("hello");
    //图片
    const myIcon = new Image;
    myIcon.src = Icon;
    element.appendChild(myIcon);
    //输出数据
    console.log(Data);
    return element;
  }
  
  document.body.appendChild(component());
