/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560FourDigitalDisplay_showNumber = function (block) {
        const number = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tj2560FourDigitalDisplay_init = `#include <Wire.h>\n#include <TM1650.h>`;
        Blockly.Arduino.definitions_.tj2560FourDigitalDisplay_init = `TM1650 tm_4display;`;
        Blockly.Arduino.setups_.tj2560FourDigitalDisplay_init = `Wire.begin();\n  tm_4display.init();`;

        return `tm_4display.displayString(${number});\n`;
    };

    Blockly.Arduino.tj2560FourDigitalDisplay_showNumberBit = function (block) {
        const n1 = Blockly.Arduino.valueToCode(block, 'N1', Blockly.Arduino.ORDER_ATOMIC);
        const n2 = Blockly.Arduino.valueToCode(block, 'N2', Blockly.Arduino.ORDER_ATOMIC);
        const n3 = Blockly.Arduino.valueToCode(block, 'N3', Blockly.Arduino.ORDER_ATOMIC);
        const n4 = Blockly.Arduino.valueToCode(block, 'N4', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tj2560FourDigitalDisplay_init = `#include <Wire.h>\n#include <TM1650.h>`;
        Blockly.Arduino.definitions_.tj2560FourDigitalDisplay_init = `TM1650 tm_4display;`;
        Blockly.Arduino.setups_.tj2560FourDigitalDisplay_init = `Wire.begin();\n  tm_4display.init();`;

        return `tm_4display.displayString("${n1}${n2}${n3}${n4}");\n`;
    };

    Blockly.Arduino.tj2560FourDigitalDisplay_setDot = function (block) {
        const pos = block.getFieldValue('POS');
        const state = block.getFieldValue('STATE');

        Blockly.Arduino.includes_.tj2560FourDigitalDisplay_init = `#include <Wire.h>\n#include <TM1650.h>`;
        Blockly.Arduino.definitions_.tj2560FourDigitalDisplay_init = `TM1650 tm_4display;`;
        Blockly.Arduino.setups_.tj2560FourDigitalDisplay_init = `Wire.begin();\n  tm_4display.init();`;

        return `tm_4display.setDot(${pos}, ${state});\n`;
    };

    Blockly.Arduino.tj2560FourDigitalDisplay_clear = function (block) {
        Blockly.Arduino.includes_.tj2560FourDigitalDisplay_init = `#include <Wire.h>\n#include <TM1650.h>`;
        Blockly.Arduino.definitions_.tj2560FourDigitalDisplay_init = `TM1650 tm_4display;`;
        Blockly.Arduino.setups_.tj2560FourDigitalDisplay_init = `Wire.begin();\n  tm_4display.init();`;

        return `tm_4display.clear();\n`;
    };

    return Blockly;
}

exports = addGenerator;
