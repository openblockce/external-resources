/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ARDUINOTJ2560EXT_CATEGORY: 'MUGEN',
        ARDUINOTJ2560EXT_SETPIXELCOLOR: 'set on board led pixel %1 color %2',
        ARDUINOTJ2560EXT_FILL: 'fill on board led from pixel %1 count %2 with color %3',
        ARDUINOTJ2560EXT_COLOR: 'RGB LED strip color R %1 G %2 B %3',
        ARDUINOTJ2560EXT_SETBRIGHTNESS: 'set on board led brightness %1',
        ARDUINOTJ2560EXT_CLEAR: 'clear all on board led',
        ARDUINOTJ2560EXT_HC595SHOW: 'on board display show %1',
        ARDUINOTJ2560EXT_HC595SHOWNULL: 'null',

        ARDUINOTJ2560EXT_PLAYSOUND: 'on board buzzer play sound with frequency %1 Hz for %2 second',
        ARDUINOTJ2560EXT_PLAYTONEFORBEAT: 'on board buzzer play tone %1 for %2 beat',
        ARDUINOTJ2560EXT_SETTEMPO: 'set on board buzzer tempo to (bpm) %1',
        ARDUINOTJ2560EXT_PLAYRINGTONE: 'on board buzzer play ringtone %1',
        ARDUINOTJ2560EXT_CONNECTION: 'connection',
        ARDUINOTJ2560EXT_DISCONNECTION: 'disconnet',
        ARDUINOTJ2560EXT_DIDI: 'button pushed',
        ARDUINOTJ2560EXT_MODE1: 'mode1',
        ARDUINOTJ2560EXT_MODE2: 'mode2',
        ARDUINOTJ2560EXT_MODE3: 'mode3',
        ARDUINOTJ2560EXT_SURPRISE: 'surprise',
        ARDUINOTJ2560EXT_OHOOH: 'OhOoh',
        ARDUINOTJ2560EXT_OHOOH2: 'OhOoh2',
        ARDUINOTJ2560EXT_CUDDLY: 'cuddly',
        ARDUINOTJ2560EXT_SLEEPING: 'sleeping',
        ARDUINOTJ2560EXT_HAPPY: 'happy',
        ARDUINOTJ2560EXT_SUPERHAPPY: 'super happy',
        ARDUINOTJ2560EXT_HAPPYSHORT: 'happy short',
        ARDUINOTJ2560EXT_SAD: 'sad',
        ARDUINOTJ2560EXT_CONFUSED: 'confused',
        ARDUINOTJ2560EXT_FART1: 'fart1',
        ARDUINOTJ2560EXT_FART2: 'fart2',
        ARDUINOTJ2560EXT_FART3: 'fart3',

        ARDUINOTJ2560EXT_READKEY: 'read on board key %1 state %2',

        ARDUINOTJ2560EXT_INIT: 'init shift digit display length %1 pin SCLK %2 RCLK %3 DIO %4',
        ARDUINOTJ2560EXT_DISPLAYNUMBER: 'shift digit display display number %1',
        ARDUINOTJ2560EXT_CH595_SHOW: 'shift digit display show for %10 ms',
        ARDUINOTJ2560EXT_REFRESH_TOOLTIP: 'This command will block the program, ' +
            'it is recommended to run for 1ms in each loop.',

        ARDUINOTJ2560EXT_ONBOARDDRIVERRUN: 'on board motor driver %1 run %2 speed %3',
        ARDUINOTJ2560EXT_ONBOARDDRIVERSTOP: 'on board motor driver %1 stop',
        ARDUINOTJ2560EXT_FORWARD: 'foward',
        ARDUINOTJ2560EXT_BACK: 'back',
        ARDUINOTJ2560EXT_BUTTONSTATE_ACTIVE: 'active',
        ARDUINOTJ2560EXT_BUTTONSTATE_INACTIVE: 'inactive',

        ARDUINOTJ2560EXT_ONBOARDENCODERREAD: 'read on board encoder %1 value',
        ARDUINOTJ2560EXT_ONBOARDENCODERRESET: 'reset on board encoder %1 value'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ARDUINOTJ2560EXT_CATEGORY: 'MUGEN',
        ARDUINOTJ2560EXT_SETPIXELCOLOR: '设置板载全彩灯 %1 号灯颜色 %2',
        ARDUINOTJ2560EXT_FILL: '板载全彩灯从 %1 号灯开始共填充 %2 个灯颜色 %3',
        ARDUINOTJ2560EXT_COLOR: '颜色 R %1 G %2 B %3',
        ARDUINOTJ2560EXT_SETBRIGHTNESS: '设置板载全彩灯亮度 %1',
        ARDUINOTJ2560EXT_CLEAR: '清除所有板载全彩灯',
        ARDUINOTJ2560EXT_HC595SHOW: '板载数码管显示 %1',
        ARDUINOTJ2560EXT_HC595SHOWNULL: '空',

        ARDUINOTJ2560EXT_PLAYSOUND: '板载蜂鸣器以频率 %1 Hz 播放声音持续 %2 秒',
        ARDUINOTJ2560EXT_PLAYTONEFORBEAT: '板载蜂鸣器播放音调 %1 持续 %2 节拍',
        ARDUINOTJ2560EXT_SETTEMPO: '设置板载蜂鸣器节奏为 (bpm) %1',
        ARDUINOTJ2560EXT_PLAYRINGTONE: '板载蜂鸣器播放铃声 %1',
        ARDUINOTJ2560EXT_CONNECTION: '连接',
        ARDUINOTJ2560EXT_DISCONNECTION: '断开',
        ARDUINOTJ2560EXT_DIDI: '按键按下',
        ARDUINOTJ2560EXT_MODE1: '模式1',
        ARDUINOTJ2560EXT_MODE2: '模式2',
        ARDUINOTJ2560EXT_MODE3: '模式3',
        ARDUINOTJ2560EXT_SURPRISE: '惊讶',
        ARDUINOTJ2560EXT_OHOOH: '哦哦',
        ARDUINOTJ2560EXT_OHOOH2: '哦哦2',
        ARDUINOTJ2560EXT_CUDDLY: '可爱',
        ARDUINOTJ2560EXT_SLEEPING: '正在睡觉',
        ARDUINOTJ2560EXT_HAPPY: '开心',
        ARDUINOTJ2560EXT_SUPERHAPPY: '非常开心',
        ARDUINOTJ2560EXT_HAPPYSHORT: '开心短',
        ARDUINOTJ2560EXT_SAD: '难过',
        ARDUINOTJ2560EXT_CONFUSED: '困惑',
        ARDUINOTJ2560EXT_FART1: '放屁1',
        ARDUINOTJ2560EXT_FART2: '放屁2',
        ARDUINOTJ2560EXT_FART3: '放屁3',

        ARDUINOTJ2560EXT_READKEY: '读取板载按键 %1 状态 %2',

        ARDUINOTJ2560EXT_DISPLAYNUMBER: '移位数码管显示数字 %1',
        ARDUINOTJ2560EXT_CH595_SHOW: '移位数码管显示 %1 ms',
        ARDUINOTJ2560EXT_REFRESH_TOOLTIP: '这条指令将会阻塞程序，推荐在每个循环中运行10ms。',

        ARDUINOTJ2560EXT_ONBOARDDRIVERRUN: '板载电机驱动 %1 向 %2 速度 %3',
        ARDUINOTJ2560EXT_ONBOARDDRIVERSTOP: '板载电机驱动 %1 停止',
        ARDUINOTJ2560EXT_FORWARD: '前',
        ARDUINOTJ2560EXT_BACK: '后',
        ARDUINOTJ2560EXT_BUTTONSTATE_ACTIVE: '触发',
        ARDUINOTJ2560EXT_BUTTONSTATE_INACTIVE: '未触发',

        ARDUINOTJ2560EXT_ONBOARDENCODERREAD: '读取板载编码器 %1 数值',
        ARDUINOTJ2560EXT_ONBOARDENCODERRESET: '重置板载编码器 %1 数值'
    });
    return Blockly;
}

exports = addMsg;
