/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560PS2_CATEGORY: 'PS2',
        TJ2560PS2_INIT: 'init ps2 receiver port %1',
        TJ2560PS2_READDATA: 'read PS2 receiver data',
        TJ2560PS2_GETBUTTON: 'PS2 %1 button is pressed?',
        TJ2560PS2_UP: 'up',
        TJ2560PS2_DOWN: 'down',
        TJ2560PS2_LEFT: 'left',
        TJ2560PS2_RIGHT: 'right',
        TJ2560PS2_TRIANGLE: 'triangle',
        TJ2560PS2_CIRCLE: 'circle',
        TJ2560PS2_CROSS: 'cross',
        TJ2560PS2_SQUARE: 'square',
        TJ2560PS2_SELECT: 'select',
        TJ2560PS2_START: 'start',
        TJ2560PS2_GETJOYSTICK: 'PS2 get joystick %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560PS2_CATEGORY: 'PS2 手柄接收器',
        TJ2560PS2_INIT: '初始化 PS2 手柄接收器接口 %1',
        TJ2560PS2_READDATA: '读取 PS2 接收器数据',
        TJ2560PS2_GETBUTTON: 'PS2 %1 按键被按下?',
        TJ2560PS2_UP: '上',
        TJ2560PS2_DOWN: '下',
        TJ2560PS2_LEFT: '左',
        TJ2560PS2_RIGHT: '右',
        TJ2560PS2_TRIANGLE: '三角',
        TJ2560PS2_CIRCLE: '圆',
        TJ2560PS2_CROSS: '叉号',
        TJ2560PS2_SQUARE: '方块',
        TJ2560PS2_SELECT: '选择',
        TJ2560PS2_START: '开始',
        TJ2560PS2_GETJOYSTICK: '获取 PS2 摇杆 %1 数值'
    });
    return Blockly;
}

exports = addMsg;
