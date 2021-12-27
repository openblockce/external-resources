/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560POWERCORE_CATEGORY: 'Core Power',
        TJ2560POWERCORE_SETPIXELCOLOR: 'set on board led pixel %1 color %2',
        TJ2560POWERCORE_FILL: 'fill on board led from pixel %1 count %2 with color %3',
        TJ2560POWERCORE_COLOR: 'RGB LED strip color R %1 G %2 B %3',
        TJ2560POWERCORE_SETBRIGHTNESS: 'set on board led brightness %1',
        TJ2560POWERCORE_CLEAR: 'clear all on board led',
        TJ2560POWERCORE_HC595SHOW: 'on board display show %1',
        TJ2560POWERCORE_HC595SHOWNULL: 'null',
        TJ2560POWERCORE_READKEY: 'read on board key %1 state %2',
        TJ2560POWERCORE_BUTTONSTATE_ACTIVE: 'active',
        TJ2560POWERCORE_BUTTONSTATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560POWERCORE_CATEGORY: '核心能量',
        TJ2560POWERCORE_SETPIXELCOLOR: '设置板载全彩灯 %1 号灯颜色 %2',
        TJ2560POWERCORE_FILL: '板载全彩灯从 %1 号灯开始共填充 %2 个灯颜色 %3',
        TJ2560POWERCORE_COLOR: '颜色 R %1 G %2 B %3',
        TJ2560POWERCORE_SETBRIGHTNESS: '设置板载全彩灯亮度 %1',
        TJ2560POWERCORE_CLEAR: '清除所有板载全彩灯',
        TJ2560POWERCORE_HC595SHOW: '板载数码管显示 %1',
        TJ2560POWERCORE_HC595SHOWNULL: '空',
        TJ2560POWERCORE_READKEY: '读取板载按键 %1 状态 %2',
        TJ2560POWERCORE_BUTTONSTATE_ACTIVE: '触发',
        TJ2560POWERCORE_BUTTONSTATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
