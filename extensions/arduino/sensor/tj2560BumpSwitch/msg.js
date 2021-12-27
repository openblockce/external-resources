/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560BUMPSWITCH_CATEGORY: 'Bump Switch',
        TJ2560BUMPSWITCH_READ: 'read %1 bump switch state %2',
        TJ2560BUMPSWITCH_STATE_ACTIVE: 'active',
        TJ2560BUMPSWITCH_STATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560BUMPSWITCH_CATEGORY: '触碰传感器',
        TJ2560BUMPSWITCH_READ: '读取 %1 触碰传感器状态 %2',
        TJ2560BUMPSWITCH_STATE_ACTIVE: '触发',
        TJ2560BUMPSWITCH_STATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
