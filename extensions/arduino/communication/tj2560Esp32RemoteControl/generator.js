/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560Esp32RemoteControl_readData = function () {
        Blockly.Arduino.includes_.tj2560Esp32RemoteControl_init = '#include <esp32RemoteControl.h>\n#include <Sounds.h>';
        Blockly.Arduino.definitions_.tj2560Esp32RemoteControl_init = 'ESPRC esp_rc;';
        Blockly.Arduino.setups_.tj2560Esp32RemoteControl_init = 'esp_rc.init();';

        return `esp_rc.readData();\n`;
    };

    Blockly.Arduino.tj2560Esp32RemoteControl_getButton = function () {
        const button = this.getFieldValue('BUTTON');
        const code = `esp_rc.${button}`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560Esp32RemoteControl_getJoystick = function () {
        const button = this.getFieldValue('BUTTON');
        const code = `esp_rc.${button}`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560Esp32RemoteControl_playSound = function (block) {
        Blockly.Arduino.includes_.tj2560Esp32RemoteControl_init = '#include <esp32RemoteControl.h>\n#include <Sounds.h>';
        Blockly.Arduino.definitions_.tj2560Esp32RemoteControl_init = 'ESPRC esp_rc;';
        Blockly.Arduino.setups_.tj2560Esp32RemoteControl_init = 'esp_rc.init();';

        const freq = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        return `esp_rc.setBuzzer(${freq});\ndelay(1000 * ${time});\nesp_rc.setBuzzer(0);\n`;
    };

    Blockly.Arduino.atj2560Esp32RemoteControl_playToneForTime = function (block) {
        Blockly.Arduino.includes_.tj2560Esp32RemoteControl_init = '#include <esp32RemoteControl.h>\n#include <Sounds.h>';
        Blockly.Arduino.definitions_.tj2560Esp32RemoteControl_init = 'ESPRC esp_rc;';
        Blockly.Arduino.setups_.tj2560Esp32RemoteControl_init = 'esp_rc.init();';

        const freq = this.getFieldValue('FREQ');
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        return `esp_rc.setBuzzer(${freq});\ndelay(1000 * ${time});\nesp_rc.setBuzzer(0);\n`;
    };

    return Blockly;
}

exports = addGenerator;
