/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560Sound_readDigital = function (block) {
        const port = block.getFieldValue('PORT');
        const sta = block.getFieldValue('STA');

        Blockly.Arduino.setups_[`tj2560Sound_readDigital${port}`] = `pinMode(pinMap[${port}][S5], INPUT_PULLUP);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`(digitalRead(pinMap[${port}][S5]) == ${sta})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560Sound_readAnalog = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.setups_[`tj2560Sound_readAnalog${port}`] = `pinMode(pinMap[${port}][S1], INPUT);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`analogRead(pinMap[${port}][S1])`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
