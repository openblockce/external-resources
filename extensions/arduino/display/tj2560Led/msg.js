/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560LED_CATEGORY: 'Led',
        TJ2560LED_SET: 'set %1 led %2',
        TJ2560LED_ON: 'on',
        TJ2560LED_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560LED_CATEGORY: 'LED 模块',
        TJ2560LED_SET: '设置 %1 LED 模块 %2',
        TJ2560LED_ON: '点亮',
        TJ2560LED_OFF: '熄灭'
    });
    return Blockly;
}

exports = addMsg;
