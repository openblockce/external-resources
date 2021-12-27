/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560TILTSENSOR_CATEGORY: 'Tilt Sensor',
        TJ2560TILTSENSOR_READ: 'read %1 tilt sensor state %2',
        TJ2560TILTSENSOR_STATE_ACTIVE: 'active',
        TJ2560TILTSENSOR_STATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560TILTSENSOR_CATEGORY: '倾斜传感器',
        TJ2560TILTSENSOR_READ: '读取 %1 倾斜传感器状态 %2',
        TJ2560TILTSENSOR_STATE_ACTIVE: '触发',
        TJ2560TILTSENSOR_STATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
