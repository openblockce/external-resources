/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560COLORSENSOR_CATEGORY: 'Color Sensor',
        TJ2560COLORSENSOR_READ: 'read %1 color sensor color %2 value'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560COLORSENSOR_CATEGORY: '颜色传感器',
        TJ2560COLORSENSOR_READ: '读取 %1 颜色传感器颜色 %2 数值'
    });
    return Blockly;
}

exports = addMsg;
