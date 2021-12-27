/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        EITGHTTIMESEIGHTMATIRXDISPLAY_CATEGORY: 'Matrix Display',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWPIXEL: 'Martix display %1 draw pixel x: %2 y: %3 color %4',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED: 'red',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK: 'black',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWLINE: 'Martix display %1 draw line x0: %2 y0: %3, x1: %4 y1: %5 color %6',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWCHAR: 'Martix display %1 show char %2 color %3',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWNUMBER: 'Martix display %1 show number %2 color %3',
        EITGHTTIMESEIGHTMATIRXDISPLAY_FILL: 'Martix display %1 fill color %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETBRIGHTNESS: 'Martix display %1 set brightness %2'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        EITGHTTIMESEIGHTMATIRXDISPLAY_CATEGORY: '点阵模块',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWPIXEL: '点阵模块 %1 绘制点 x: %2 y: %3 颜色 %4',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED: '红色',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK: '黑色',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWLINE: '点阵模块 %1 绘制直线 x0: %2 y0: %3, x1: %4 y1: %5 颜色 %6',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWCHAR: '点阵模块 %1 绘制字符 %2 颜色 %3',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWNUMBER: '点阵模块 %1 绘制数字 %2 颜色 %3',
        EITGHTTIMESEIGHTMATIRXDISPLAY_FILL: '点阵模块 %1 填充颜色 %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETBRIGHTNESS: '点阵模块 %1 设置亮度 %2'
    });
    return Blockly;
}

exports = addMsg;
