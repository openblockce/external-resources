/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560Ultrasonic_readDistance = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.ultrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`ultrasonic_readDistance_${port}`] =
            `Ultrasonic ultrasonic_${port}(pinMap[${port}][S6], pinMap[${port}][S5]);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`ultrasonic_${port}.read(CM)`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
