/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560FIVERGBLED_CATEGORY: '5 RGB LED',
        TJ2560FIVERGBLED_SETPIXELCOLOR: 'set %1 rgb led pixel %2 color %3',
        TJ2560FIVERGBLED_FILL: 'fill %1 rgb led from pixel %2 count %3 with color %4',
        TJ2560FIVERGBLED_CLEAR: 'clear all %1 rgb led',
        TJ2560FIVERGBLED_COLOR: 'RGB LED color R %1 G %2 B %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560FIVERGBLED_CATEGORY: 'RGB灯带模块',
        TJ2560FIVERGBLED_SETPIXELCOLOR: '设置 %1 RGB灯带模块 %2 号灯颜色 %3',
        TJ2560FIVERGBLED_FILL: '填充 %1 RGB灯带模块从 %2 号灯开始共 %3 个灯颜色 %4',
        TJ2560FIVERGBLED_CLEAR: '清除 %1 RGB灯带模块所有灯',
        TJ2560FIVERGBLED_COLOR: '颜色 R %1 G %2 B %3'
    });
    return Blockly;
}

exports = addMsg;
