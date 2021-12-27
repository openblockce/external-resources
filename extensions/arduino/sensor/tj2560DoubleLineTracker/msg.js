/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560DOUBLELINETRACKER_CATEGORY: 'Double Line Tracker',
        TJ2560DOUBLELINETRACKER_READ: 'read %1 double line tracker %2 state %3',
        TJ2560DOUBLELINETRACKER_LEFT: 'left',
        TJ2560DOUBLELINETRACKER_RIGHT: 'right',
        TJ2560DOUBLELINETRACKER_STATE_LIGHT: 'light',
        TJ2560DOUBLELINETRACKER_STATE_DARK: 'dark'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560DOUBLELINETRACKER_CATEGORY: '双循迹传感器',
        TJ2560DOUBLELINETRACKER_READ: '读取 %1 双循迹传感器 %2 状态 %3',
        TJ2560DOUBLELINETRACKER_LEFT: '左侧',
        TJ2560DOUBLELINETRACKER_RIGHT: '右侧',
        TJ2560DOUBLELINETRACKER_STATE_LIGHT: '亮',
        TJ2560DOUBLELINETRACKER_STATE_DARK: '灭'
    });
    return Blockly;
}

exports = addMsg;
