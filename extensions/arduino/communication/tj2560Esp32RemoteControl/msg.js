/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560ESP32REMOTECONTROL_CATEGORY: 'Wireless Remote Control',
        TJ2560ESP32REMOTECONTROL_READDATA: 'wireless remote control read data',
        TJ2560ESP32REMOTECONTROL_GETBUTTON: 'wireless remote control button %1 is pressed?',
        TJ2560ESP32REMOTECONTROL_LU: 'LU',
        TJ2560ESP32REMOTECONTROL_LD: 'LD',
        TJ2560ESP32REMOTECONTROL_LL: 'LL',
        TJ2560ESP32REMOTECONTROL_LR: 'LR',
        TJ2560ESP32REMOTECONTROL_RA: 'RA',
        TJ2560ESP32REMOTECONTROL_RB: 'RB',
        TJ2560ESP32REMOTECONTROL_RC: 'RC',
        TJ2560ESP32REMOTECONTROL_RD: 'RD',
        TJ2560ESP32REMOTECONTROL_MF: 'F',
        TJ2560ESP32REMOTECONTROL_GETJOYSTICK: 'wireless remote control stick %1 value',
        TJ2560ESP32REMOTECONTROL_PLAYSOUND: 'wireless remote control buzzer play sound with frequency %1 Hz for %2 second',
        TJ2560ESP32REMOTECONTROL_PLAYTONEFORTIME: 'wireless remote control buzzer play tone %1 for %2 seconed',

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560ESP32REMOTECONTROL_CATEGORY: '无线遥控器',
        TJ2560ESP32REMOTECONTROL_READDATA: '无线遥控器读取数据',
        TJ2560ESP32REMOTECONTROL_GETBUTTON: '无线遥控器 %1 按键被按下?',
        TJ2560ESP32REMOTECONTROL_LU: '左U',
        TJ2560ESP32REMOTECONTROL_LD: '左D',
        TJ2560ESP32REMOTECONTROL_LL: '左L',
        TJ2560ESP32REMOTECONTROL_LR: '左R',
        TJ2560ESP32REMOTECONTROL_RA: '右A',
        TJ2560ESP32REMOTECONTROL_RB: '右B',
        TJ2560ESP32REMOTECONTROL_RC: '右C',
        TJ2560ESP32REMOTECONTROL_RD: '右D',
        TJ2560ESP32REMOTECONTROL_MF: 'F',
        TJ2560ESP32REMOTECONTROL_GETJOYSTICK: '无线遥控器摇杆 %1 数值',
        TJ2560ESP32REMOTECONTROL_PLAYSOUND: '无线遥控器蜂鸣器以频率 %1 Hz 播放声音持续 %2 秒',
        TJ2560ESP32REMOTECONTROL_PLAYTONEFORTIME: '无线遥控器蜂鸣器播放音调 %1 持续 %2 秒',
    });
    return Blockly;
}

exports = addMsg;
