/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560THREELINETRACKER_CATEGORY: 'Double Line Tracker',
        TJ2560THREELINETRACKER_READ: 'read %1 double line tracker %2 state %3',
        TJ2560THREELINETRACKER_LEFT: 'left',
        TJ2560THREELINETRACKER_MIDDLE: 'middle',
        TJ2560THREELINETRACKER_RIGHT: 'right',
        TJ2560LINETRAKER_STATE_LIGHT: 'light',
        TJ2560LINETRAKER_STATE_DARK: 'dark'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560THREELINETRACKER_CATEGORY: '三路循迹传感器',
        TJ2560THREELINETRACKER_READ: '读取 %1 三路循迹传感器 %2 状态 %3',
        TJ2560THREELINETRACKER_LEFT: '左侧',
        TJ2560THREELINETRACKER_MIDDLE: '中间',
        TJ2560THREELINETRACKER_RIGHT: '右侧',
        TJ2560THREELINETRACKER_STATE_LIGHT: '亮',
        TJ2560THREELINETRACKER_STATE_DARK: '灭'
    });
    return Blockly;
}

exports = addMsg;
