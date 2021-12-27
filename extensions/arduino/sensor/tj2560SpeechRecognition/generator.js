/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560SpeechRecognition_readData = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.tj2560SpeechRecognition_readData = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.definitions_.tj2560SpeechRecognition_readData = `SoftwareSerial speechRSerial(pinMap[${port}][S1], pinMap[${port}][S2]);\nuint8_t speechData = 0;`;
        Blockly.Arduino.setups_.tj2560SpeechRecognition_readData = `speechRSerial.begin(9600);`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `if (speechRSerial.available() > 0) {
    speechData = speechRSerial.read();
} else {
    speechData = 0;
}
`;
    };

    Blockly.Arduino.tj2560SpeechRecognition_isGetSpeech = function (block) {
        const speech = block.getFieldValue('SPEECH');

        return [`(speechData == ${speech})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
