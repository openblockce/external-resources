/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560FiveRgbLed_setPixelColor = function (block) {
        const port = block.getFieldValue('PORT');
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.tj2560FiveRgbLed_setPixelColor = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `Adafruit_NeoPixel fiveLedStrip_${port}(5, pinMap[${port}][S5], NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `fiveLedStrip_${port}.begin();`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `fiveLedStrip_${port}.setPixelColor(${no} - 1, ${colour});\nfiveLedStrip_${port}.show();\n`;
    };

    Blockly.Arduino.tj2560FiveRgbLed_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

        return [`${(r << 16) + (g << 8) + b}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560FiveRgbLed_fill = function (block) {
        const port = block.getFieldValue('PORT');
        const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
        const count = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.tj2560FiveRgbLed_setPixelColor = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `Adafruit_NeoPixel fiveLedStrip_${port}(5, pinMap[${port}][S5], NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `fiveLedStrip_${port}.begin();`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `fiveLedStrip_${port}.fill(${colour}, ${first} - 1, ${count});\nfiveLedStrip_${port}.show();\n`;
    };

    Blockly.Arduino.tj2560FiveRgbLed_setBrightness = function (block) {
        const port = block.getFieldValue('PORT');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tj2560FiveRgbLed_setPixelColor = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `Adafruit_NeoPixel fiveLedStrip_${port}(5, pinMap[${port}][S5], NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `fiveLedStrip_${port}.begin();`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `fiveLedStrip_${port}.setBrightness(${brightness});\nfiveLedStrip_${port}.show();\n`;
    };

    Blockly.Arduino.tj2560FiveRgbLed_clear = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.tj2560FiveRgbLed_setPixelColor = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `Adafruit_NeoPixel fiveLedStrip_${port}(5, pinMap[${port}][S5], NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `fiveLedStrip_${port}.begin();`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `fiveLedStrip_${port}.clear();\nfiveLedStrip_${port}.show();\n`;
    };

    Blockly.Arduino.tj2560FiveRgbLed_show = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.tj2560FiveRgbLed_setPixelColor = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `Adafruit_NeoPixel fiveLedStrip_${port}(5, pinMap[${port}][S5], NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`tj2560FiveRgbLed_setPixelColor_${port}`] = `fiveLedStrip_${port}.begin();`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `fiveLedStrip_${port}.show();\nfiveLedStrip_${port}.show();\n`;
    };

    return Blockly;
}

exports = addGenerator;
