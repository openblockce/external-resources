/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560SmokeRocker_readSwitch = function (block) {
        const port = block.getFieldValue('PORT');
        const sta = block.getFieldValue('STA');

        Blockly.Arduino.setups_[`tj2560SmokeRocker_readSwitch${port}`] = `pinMode(pinMap[${port}][S5], INPUT_PULLUP);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`(digitalRead(pinMap[${port}][S5]) == ${sta})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560SmokeRocker_readRocker = function (block) {
        const port = block.getFieldValue('PORT');
        const rocker = block.getFieldValue('ROCKER');

        Blockly.Arduino.setups_[`tj2560SmokeRocker_readRocker${port}`] = `pinMode(pinMap[${port}][${rocker}], INPUT);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`analogRead(pinMap[${port}][${rocker}])`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
