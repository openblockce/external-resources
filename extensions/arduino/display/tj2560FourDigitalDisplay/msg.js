/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560FOURDIGITALDISPLAY_CATEGORY: '4 Digital Display',
        TJ2560FOURDIGITALDISPLAY_SHOWNUMBER: '4 digital display show number %1',
        TJ2560FOURDIGITALDISPLAY_SHOWNUMBERBIT: '4 digital display %1 show number %2 %3 %4 %5',
        TJ2560FOURDIGITALDISPLAY_SETDOT: '4 digital display set %1 rd dot %2',
        TJ2560FOURDIGITALDISPLAY_STATE_ON: 'on',
        TJ2560FOURDIGITALDISPLAY_STATE_OFF: 'off',
        tj2560FourDigitalDisplay_CLEAR: 'clear 4 digital display'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560FOURDIGITALDISPLAY_CATEGORY: '数码管模块',
        TJ2560FOURDIGITALDISPLAY_SHOWNUMBER: '设置 %1 数码管模块显示数字 %2',
        TJ2560FOURDIGITALDISPLAY_SHOWNUMBERBIT: '设置 %1 数码管模块显示数字 %2 %3 %4 %5',
        TJ2560FOURDIGITALDISPLAY_SETDOT: '设置 %1 数码管模块第 %2 位小数点 %3',
        TJ2560FOURDIGITALDISPLAY_STATE_ON: '点亮',
        TJ2560FOURDIGITALDISPLAY_STATE_OFF: '熄灭',
        tj2560FourDigitalDisplay_CLEAR: '数码管模块 %1 清空显示'
    });
    return Blockly;
}

exports = addMsg;
