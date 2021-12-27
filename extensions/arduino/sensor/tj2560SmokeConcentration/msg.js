/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SMOKECONCENTRATION_CATEGORY: 'Smoke Concentration',
        TJ2560SMOKECONCENTRATION_READDIGITAL: 'read %1 smoke concentration state %2',
        TJ2560SMOKECONCENTRATION_READANALOG: 'read %1 smoke concentration analog',
        TJ2560SMOKECONCENTRATION_STATE_ACTIVE: 'active',
        TJ2560SMOKECONCENTRATION_STATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SMOKECONCENTRATION_CATEGORY: '烟雾传感器',
        TJ2560SMOKECONCENTRATION_READDIGITAL: '读取 %1 烟雾传感器状态 %2',
        TJ2560SMOKECONCENTRATION_READANALOG: '读取 %1 烟雾传感器数值',
        TJ2560SMOKECONCENTRATION_STATE_ACTIVE: '触发',
        TJ2560SMOKECONCENTRATION_STATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
