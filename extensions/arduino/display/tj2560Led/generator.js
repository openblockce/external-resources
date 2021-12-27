/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560Led_set = function (block) {
        const port = block.getFieldValue('PORT');
        const state = block.getFieldValue('STATE');

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        Blockly.Arduino.setups_.tj2560Led_set = `pinMode(pinMap[${port}][S5], OUTPUT);`;
        return `digitalWrite(pinMap[${port}][S5], ${state});\n`;
    };

    return Blockly;
}

exports = addGenerator;
