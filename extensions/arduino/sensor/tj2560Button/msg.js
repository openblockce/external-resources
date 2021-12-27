/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560BUTTON_CATEGORY: 'Button',
        TJ2560BUTTON_READ: 'read %1 button state %2',
        TJ2560BUTTON_SATE_ACTIVE: 'active',
        TJ2560BUTTON_SATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560BUTTON_CATEGORY: '开关模块',
        TJ2560BUTTON_READ: '读取 %1 按键状态 %2',
        TJ2560BUTTON_SATE_ACTIVE: '触发',
        TJ2560BUTTON_SATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
