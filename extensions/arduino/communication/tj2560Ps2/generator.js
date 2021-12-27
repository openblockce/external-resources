/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560Ps2_init = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.tj2560Ps2_init = '#include <PS2X_lib.h>';
        Blockly.Arduino.definitions_.tj2560Ps2_init = 'PS2X tj2560Ps2x;';
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `tj2560Ps2x.config_gamepad(pinMap[${port}][S1], pinMap[${port}][S5], pinMap[${port}][S2], pinMap[${port}][S6], false, false);\n`;
    };

    Blockly.Arduino.tj2560Ps2_readData = function () {
        return 'tj2560Ps2x.read_gamepad();\n';
    };

    Blockly.Arduino.tj2560Ps2_getButton = function () {
        const button = this.getFieldValue('BUTTON');
        const code = `tj2560Ps2x.Button(${button})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560Ps2_GetJoystick = function () {
        const joystick = this.getFieldValue('JOYSTICK');
        const code = `tj2560Ps2x.Analog(${joystick})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
