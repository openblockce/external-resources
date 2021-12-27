/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560LINETRAKER_CATEGORY: 'Line Tracker',
        TJ2560LINETRAKER_READ: 'read %1 line tracker state %2',
        TJ2560LINETRAKER_STATE_LIGHT: 'light',
        TJ2560LINETRAKER_STATE_DARK: 'dark'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560LINETRAKER_CATEGORY: '循迹传感器',
        TJ2560LINETRAKER_READ: '读取 %1 循迹传感器状态 %2',
        TJ2560LINETRAKER_STATE_LIGHT: '亮',
        TJ2560LINETRAKER_STATE_DARK: '灭'
    });
    return Blockly;
}

exports = addMsg;
