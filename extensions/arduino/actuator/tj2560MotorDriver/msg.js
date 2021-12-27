/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560MOTORDRIVER_CATEGORY: 'Motor Driver',
        TJ2560MOTORDRIVER_RUN: 'motor driver %1 run %2 speed %3',
        J2560MOTORDRIVER_CW: 'CW',
        J2560MOTORDRIVER_CCW: 'CCW',
        TJ2560MOTORDRIVER_STOP: 'motor driver %1 stop'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560MOTORDRIVER_CATEGORY: '电机驱动模块',
        TJ2560MOTORDRIVER_RUN: '电机驱动模块 %1 向 %2 速度 %3',
        J2560MOTORDRIVER_CW: '前',
        J2560MOTORDRIVER_CCW: '后',
        TJ2560MOTORDRIVER_STOP: '电机驱动模块 %1 停止'
    });
    return Blockly;
}

exports = addMsg;
