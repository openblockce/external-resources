/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560RGBLED_CATEGORY: 'Single Rgb Led',
        TJ2560RGBLED_SETPIXELCOLOR: 'set %1 rgb led color %2',
        TJ2560RGBLED_COLOR: 'RGB LED color R %1 G %2 B %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560RGBLED_CATEGORY: 'RGB彩灯模块',
        TJ2560RGBLED_SETPIXELCOLOR: '设置 %1 RGB彩灯模块颜色 %2',
        TJ2560RGBLED_COLOR: '颜色 R %1 G %2 B %3'
    });
    return Blockly;
}

exports = addMsg;
