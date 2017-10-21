function Message (option) {
    this.title = option.title;
    this.content = option.content;
    this.type = option.type ? option.type : 'info';
    this.handleConfirm = option.handleConfirm;
    this.handleCancel = option.handleCancel;
    this.wrap = document.getElementsByClassName('message-box')[0];
    this.titleArea = document.getElementsByClassName('message-title')[0];
    this.contentArea = document.getElementsByClassName('message-content')[0];
    this.closeArea = document.getElementsByClassName('message-close')[0];
    this.confirmBtn = document.getElementsByClassName('confirm')[0];
    this.cancelBtn = document.getElementsByClassName('cancel')[0];
    this.init();
};
// 初始化
Message.prototype.init = function () {
    // 生成遮罩层
    this.shadeDiv = shade();
    this.wrap.style.display = 'none';
    this.titleArea.innerHTML = this.title;
    this.contentArea.innerHTML = this.content;
    this.titleArea.setAttribute('class', this.type + ' message-title');
    // 绑定点击事件
    this.confirmBtn.onclick = () => {
        this.hidden();
        this.handleConfirm();
    };
    this.cancelBtn.onclick = () => {
        this.hidden();
        this.handleCancel();
    };
    this.closeArea.onclick = () => {
        this.hidden();
    };
};
// 显示消息框
Message.prototype.show = function () {
    this.wrap.style.display = 'block';
    // 添加淡入动画效果
    this.wrap.style.animation = 'fadeIn 0.3s';
};
// 隐藏消息框
Message.prototype.hidden = function () {
    // 添加淡出动画效果
    this.wrap.style.animation = 'fadeOut 0.3s';
    // 设置一个与淡出时间相同的定时器用来隐藏消息框
    setTimeout(() => {
        this.wrap.style.display = 'none';
    }, 300);
    document.body.removeChild(this.shadeDiv);
};

// 遮罩层
function shade () {
    let div = document.createElement('div');
    div.setAttribute('style', `width:${window.innerWidth}px;height:${window.innerHeight}px;background:#000;position:fixed;top:0;opacity:0.5;z-index:10`);
    document.body.appendChild(div);
    return div;
}

export default Message;
