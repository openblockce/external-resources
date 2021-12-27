/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560FourButton_read = function (block) {
        const port = block.getFieldValue('PORT');
        const button = block.getFieldValue('BUTTON');
        const sta = block.getFieldValue('STA');

        Blockly.Arduino.setups_[`tj2560FourButton_read${port}`] = `pinMode(pinMap[${port}][${button}], INPUT_PULLUP);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`(digitalRead(pinMap[${port}][${button}]) == ${sta})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
