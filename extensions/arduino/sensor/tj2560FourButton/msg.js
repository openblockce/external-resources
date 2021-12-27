/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560FOURBUTTON_CATEGORY: '4 Button',
        TJ2560FOURBUTTON_READ: 'read %1 button %2 state %3',
        TJ2560FOURBUTTON_SATE_ACTIVE: 'active',
        TJ2560FOURBUTTON_SATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560FOURBUTTON_CATEGORY: '四路开关模块',
        TJ2560FOURBUTTON_READ: '读取 %1 四路开关模块 %2 状态 %3',
        TJ2560FOURBUTTON_SATE_ACTIVE: '触发',
        TJ2560FOURBUTTON_SATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
