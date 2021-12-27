/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560DOUBLETOUCHBUTTON_CATEGORY: 'Double Touch Button',
        TJ2560DOUBLETOUCHBUTTON_READ: 'read %1 double touch button %2 state %3',
        TJ2560DOUBLETOUCHBUTTON_LEFT: 'left',
        TJ2560DOUBLETOUCHBUTTON_RIGHT: 'right',
        TJ2560DOUBLETOUCHBUTTON_SATE_ACTIVE: 'active',
        TJ2560DOUBLETOUCHBUTTON_SATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560DOUBLETOUCHBUTTON_CATEGORY: '触摸传感器',
        TJ2560DOUBLETOUCHBUTTON_READ: '读取 %1 触摸传感器 %2 状态 %3',
        TJ2560DOUBLETOUCHBUTTON_LEFT: '左侧',
        TJ2560DOUBLETOUCHBUTTON_RIGHT: '右侧',
        TJ2560DOUBLETOUCHBUTTON_SATE_ACTIVE: '触发',
        TJ2560DOUBLETOUCHBUTTON_SATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
