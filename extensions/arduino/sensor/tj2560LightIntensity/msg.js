/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560LIGHTINTENSITY_CATEGORY: 'Light Intensity',
        TJ2560LIGHTINTENSITY_READ: 'read %1 light intensity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560LIGHTINTENSITY_CATEGORY: '光敏传感器',
        TJ2560LIGHTINTENSITY_READ: '读取 %1 光线强度'
    });
    return Blockly;
}

exports = addMsg;
