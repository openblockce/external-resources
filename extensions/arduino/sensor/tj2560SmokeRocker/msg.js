/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SMOKEROCKER_CATEGORY: 'Rocker',
        TJ2560SMOKEROCKER_READSWITCH: 'read %1 rocker switch state %2',
        TJ2560SMOKEROCKER_READROCKER: 'read %1 rocker %2',
        TJ2560SMOKEROCKER_HORIZONTAL: 'X',
        TJ2560SMOKEROCKER_VERTICAL: 'Y',
        TJ2560SMOKEROCKER_SATE_ACTIVE: 'active',
        TJ2560SMOKEROCKER_SATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SMOKEROCKER_CATEGORY: '摇杆模块',
        TJ2560SMOKEROCKER_READSWITCH: '读取 %1 摇杆模块开关状态 %2',
        TJ2560SMOKEROCKER_READROCKER: '读取 %1 摇杆模块 %2 数值',
        TJ2560SMOKEROCKER_HORIZONTAL: 'X',
        TJ2560SMOKEROCKER_VERTICAL: 'Y',
        TJ2560SMOKEROCKER_SATE_ACTIVE: '触发',
        TJ2560SMOKEROCKER_SATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
