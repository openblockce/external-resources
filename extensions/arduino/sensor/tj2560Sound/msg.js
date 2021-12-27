/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SOUND_CATEGORY: 'Sound Sensor',
        TJ2560SOUND_READDIGITAL: 'read %1 sound sensor state %2',
        TJ2560SOUND_READANALOG: 'read %1 sound sensor analog',
        TJ2560SOUND_STATE_ACTIVE: 'active',
        TJ2560SOUND_STATE_INACTIVE: 'inactive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SOUND_CATEGORY: '声控传感器',
        TJ2560SOUND_READDIGITAL: '读取 %1 声控传感器状态 %2',
        TJ2560SOUND_READANALOG: '读取 %1 声控传感器数值',
        TJ2560SOUND_STATE_ACTIVE: '触发',
        TJ2560SOUND_STATE_INACTIVE: '未触发'
    });
    return Blockly;
}

exports = addMsg;
