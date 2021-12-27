/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560ULTRASONIC_CATEGORY: 'Ultrasonic',
        TJ2560ULTRASONIC_READ_DISTANCE: 'ultrasonic sensor %1 read distance(mm)'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560ULTRASONIC_CATEGORY: '超声波模块',
        TJ2560ULTRASONIC_READ_DISTANCE: '读取 %1 超声波模块探测距离(cm)'
    });
    return Blockly;
}

exports = addMsg;
