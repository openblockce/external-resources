/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560COLORSENSOR_CATEGORY: 'Color Sensor',
        TJ2560COLORSENSOR_READ: 'color sensor read color %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560COLORSENSOR_CATEGORY: '颜色传感器',
        TJ2560COLORSENSOR_READ: '颜色传感器读取颜色 %1'
    });
    return Blockly;
}

exports = addMsg;
