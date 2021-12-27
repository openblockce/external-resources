/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SPEECHRECOGNITION_CATEGORY: 'Speech Recognition Module',
        TJ2560SPEECHRECOGNITION_READDATA: 'read %1 speech recognition module data',
        TJ2560SPEECHRECOGNITION_ISGETSPEECH: 'is speech recognition module get %1 command?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SPEECHRECOGNITION_CATEGORY: '语言识别模块',
        TJ2560SPEECHRECOGNITION_READDATA: '读取 %1 语言识别模块数据',
        TJ2560SPEECHRECOGNITION_ISGETSPEECH: '语言识别模块收到 %1 指令?'
    });
    return Blockly;
}

exports = addMsg;
