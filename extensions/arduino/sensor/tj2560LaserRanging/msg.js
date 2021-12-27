/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560LASERRANGING_CATEGORY: 'Laser Ranging',
        TJ2560LASERRANGING_READ: 'read %1 laser ranging module distance'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560LASERRANGING_CATEGORY: '红外测距传感器',
        TJ2560LASERRANGING_READ: '读取 %1 红外测距传感器距离(mm)'
    });
    return Blockly;
}

exports = addMsg;
