/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560FLAMEINTENSITY_CATEGORY: 'Flame Intensity',
        TJ2560FLAMEINTENSITY_READ: 'read %1 flame intensity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560FLAMEINTENSITY_CATEGORY: '火焰传感器',
        TJ2560FLAMEINTENSITY_READ: '读取 %1 火焰强度'
    });
    return Blockly;
}

exports = addMsg;
