/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.arduinoTj2560Ext_setPixelColor = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.arduinoTj2560Ext_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.arduinoTj2560Ext_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.setPixelColor(${no} - 1, ${colour});\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_fill = function (block) {
        const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
        const count = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.arduinoTj2560Ext_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.arduinoTj2560Ext_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.fill(${colour}, ${first} - 1, ${count});\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.arduinoTj2560Ext_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.arduinoTj2560Ext_pixelInit = `onBoardLedStrip.begin();`;

        return [`onBoardLedStrip.Color(${r}, ${g}, ${b})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.arduinoTj2560Ext_setBrightness = function (block) {
        const brightness = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.arduinoTj2560Ext_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.arduinoTj2560Ext_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.setBrightness(${brightness});\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_clear = function () {
        Blockly.Arduino.includes_.arduinoTj2560Ext_pixelInit = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_pixelInit = `Adafruit_NeoPixel onBoardLedStrip(19, A7, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_.arduinoTj2560Ext_pixelInit = `onBoardLedStrip.begin();`;

        return `onBoardLedStrip.clear();\nonBoardLedStrip.show();\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_hc595Show = function () {
        const data = this.getFieldValue('DATA');

        Blockly.Arduino.includes_.arduinoTj2560Ext_ch595init = `#include <ShiftRegister74HC595.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_ch595init = `ShiftRegister74HC595<1> hc595(22, 24, 23);`;

        return `uint8_t hc595Values[] = {${data}};\nhc595.setAll(hc595Values);\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_playSound = function (block) {
        const freq = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.arduinoTj2560Ext_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_buzzerInit = `Buzzer onBoardBuzzer(38);\n` +
            `float beatTime = 60.0 / 120;`;

        return `onBoardBuzzer.tone(${freq}, ${time} * 1000);\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_playToneForBeat = function () {
        const freq = this.getFieldValue('FREQ');
        const time = this.getFieldValue('TIME');

        Blockly.Arduino.includes_.arduinoTj2560Ext_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_buzzerInit = `Buzzer onBoardBuzzer(38);\n` +
            `float beatTime = 60.0 / 120;`;

        return `onBoardBuzzer.tone(${freq}, ${time} * 1000 * beatTime);\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_setTempo = function (block) {
        const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.arduinoTj2560Ext_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_buzzerInit = `Buzzer onBoardBuzzer(38);\n` +
            `float beatTime = 60.0 / 120;`;

        return `beatTime = 60.0 / ${bpm};\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_playRingtone = function () {
        const no = this.getFieldValue('NO');

        Blockly.Arduino.includes_.arduinoTj2560Ext_buzzerInit = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_buzzerInit = `Buzzer onBoardBuzzer(38);\n` +
            `float beatTime = 60.0 / 120;`;

        return `onBoardBuzzer.playRingtone(${no});\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_readKey = function (block) {
        const key = this.getFieldValue('KEY');
        const sta = block.getFieldValue('STA');

        Blockly.Arduino.setups_[`arduinoTj2560Ext_readKey_${key}`] = `pinMode(${key}, INPUT_PULLUP);`;

        return [`(!digitalRead(${key}) == ${sta})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.arduinoTj2560Ext_displayNumber = function (block) {
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.arduinoTj2560Ext_74CH595_init = `#include <ShiftDisplay.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_74CH595_init = `ShiftDisplay onBoardCH595(23, 24, 22, COMMON_ANODE, 1);`;

        return `onBoardCH595.set(${num}, 0, ALIGN_RIGHT);\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_ch595_show = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.arduinoTj2560Ext_74CH595_init = `#include <ShiftDisplay.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_74CH595_init = `ShiftDisplay onBoardCH595(23, 24, 22, COMMON_ANODE, 1);`;

        return `onBoardCH595.show(${time});\n`;
    };

    Blockly.Arduino.l298n_init = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'CH', Blockly.Arduino.ORDER_ATOMIC);
        const in1 = block.getFieldValue('IN1');
        const in2 = block.getFieldValue('IN2');
        const en = block.getFieldValue('EN');

        Blockly.Arduino.includes_.l298n_init = `#include <L298N.h>`;
        Blockly.Arduino.definitions_[`l298n_init_${ch}_${in1}_${in2}_${en}`] = `L298N motor_${ch}(${en}, ${in1}, ${in2});`;
        return '';
    };

    Blockly.Arduino.arduinoTj2560Ext_onBoardDriverRun = function (block) {
        const port = block.getFieldValue('PORT');
        const dir = this.getFieldValue('DIR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_init = `#include <L298N.h>`;
        Blockly.Arduino.definitions_[`arduinoTj2560Ext_onBoardDriver_init_${port}`] = `L298N onBoardDriver_${port}(pinMap[${port}][EN], pinMap[${port}][S1], pinMap[${port}][S2]);`;

        return `onBoardDriver_${port}.run(${dir}, ${speed});\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_onBoardDriverStop = function (block) {
        const port = block.getFieldValue('PORT');

        return `onBoardDriver_${port}.stop();\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_onBoardEncoderRead = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardEncoderRead = `#include <Encoder.h>`;
        Blockly.Arduino.definitions_[`arduinoTj2560Ext_onBoardEncoderRead_${port}`] = `Encoder onBoardEncoder_${port}(pinMap[${port}][S1], pinMap[${port}][S2]);`;

        return [`onBoardEncoder_${port}.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.arduinoTj2560Ext_onBoardEncoderReset = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardEncoderRead = `#include <Encoder.h>`;
        Blockly.Arduino.definitions_[`arduinoTj2560Ext_onBoardEncoderRead_${port}`] = `Encoder onBoardEncoder_${port}(pinMap[${port}][S1], pinMap[${port}][S2]);`;

        return `onBoardEncoder_${port}.readAndReset();\n`;
    };


    return Blockly;
}

exports = addGenerator;
