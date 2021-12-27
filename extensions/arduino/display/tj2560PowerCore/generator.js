/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560PowerCore_setPixelColor = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.tj2560PowerCore_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.tj2560PowerCore_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.tj2560PowerCore_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.setPixelColor(${no} - 1, ${colour});\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.tj2560PowerCore_fill = function (block) {
        const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
        const count = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.tj2560PowerCore_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.tj2560PowerCore_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.tj2560PowerCore_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.fill(${colour}, ${first} - 1, ${count});\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.tj2560PowerCore_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tj2560PowerCore_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.tj2560PowerCore_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.tj2560PowerCore_pixelInit = `onBoardLedStrip.begin();`;

        return [`onBoardLedStrip.Color(${r}, ${g}, ${b})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560PowerCore_setBrightness = function (block) {
        const brightness = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.tj2560PowerCore_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.tj2560PowerCore_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.tj2560PowerCore_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.setBrightness(${brightness});\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.tj2560PowerCore_clear = function () {
        Blockly.Arduino.includes_.tj2560PowerCore_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.tj2560PowerCore_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.tj2560PowerCore_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.clear();\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.tj2560PowerCore_hc595Show = function () {
        const data = this.getFieldValue('DATA');

        Blockly.Arduino.includes_.tj2560PowerCore_ch595init = `#include <ShiftRegister74HC595.h>`;
        Blockly.Arduino.definitions_.tj2560PowerCore_ch595init = `ShiftRegister74HC595<1> hc595(22, 24, 23);`;
        Blockly.Arduino.definitions_.tj2560PowerCore_ch595var = `uint8_t hc595Values[1];`;

        return `hc595Values[0] = ${data};\nhc595.setAll(hc595Values);\n`;
    };

    Blockly.Arduino.tj2560PowerCore_readKey = function (block) {
        const key = this.getFieldValue('KEY');
        const sta = block.getFieldValue('STA');

        Blockly.Arduino.setups_[`tj2560PowerCore_readKey_${key}`] = `pinMode(${key}, INPUT_PULLUP);`;

        return [`(!digitalRead(${key}) == ${sta})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
