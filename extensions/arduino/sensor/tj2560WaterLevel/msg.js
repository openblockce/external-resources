/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560WATERLEVEL_CATEGORY: 'Water Level',
        TJ2560WATERLEVEL_READ: 'read %1 water level'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560WATERLEVEL_CATEGORY: '水位传感器',
        TJ2560WATERLEVEL_READ: '读取 %1 水位传感器'
    });
    return Blockly;
}

exports = addMsg;
