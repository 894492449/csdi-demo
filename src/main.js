// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Message from './message/message.js';
import './message/message.css';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});

// 监听点击事件
document.getElementsByClassName('error')[0].onclick = () => {
    let a = new Message({
        title: '错误提示框',
        content: '这是内容',
        type: 'error',
        handleConfirm: () => {
            console.log('确定');
        },
        handleCancel: () => {
            console.log('取消');
        }
    });
    a.show();
};
document.getElementsByClassName('warn')[0].onclick = () => {
    let a = new Message({
        title: '警告提示框',
        content: '这是内容',
        type: 'warn',
        handleConfirm: () => {
            console.log('确定');
        },
        handleCancel: () => {
            console.log('取消');
        }
    });
    a.show();
};
document.getElementsByClassName('info')[0].onclick = () => {
    let a = new Message({
        title: '详情提示框',
        content: '这是内容',
        type: 'info',
        handleConfirm: () => {
            console.log('确定');
        },
        handleCancel: () => {
            console.log('取消');
        }
    });
    a.show();
};
document.getElementsByClassName('log')[0].onclick = () => {
    let a = new Message({
        title: '日志提示框',
        content: '这是内容',
        type: 'log',
        handleConfirm: () => {
            console.log('确定');
        },
        handleCancel: () => {
            console.log('取消');
        }
    });
    a.show();
};
