/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    
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

    
    Blockly.Arduino.softwareSerial_begin = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const rx = Blockly.Arduino.valueToCode(block, 'RX', Blockly.Arduino.ORDER_ATOMIC);
        const tx = Blockly.Arduino.valueToCode(block, 'TX', Blockly.Arduino.ORDER_ATOMIC);
        const baudrate = this.getFieldValue('BAUD');

        Blockly.Arduino.includes_.softwareSerial_begin = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.definitions_[`softwareSerial_begin${no}`] = `SoftwareSerial softwareSerial_${no}(${rx}, ${tx});`;
        return `softwareSerial_${no}.begin(${baudrate});\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_bluetoothPrint = function (block) {
        Blockly.Arduino.includes_.bluetooth = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.setups_.bluetooth = `Serial2.begin(115200);`;

        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const eol = this.getFieldValue('EOL');

        if (eol === '0') {

            return `Serial2.println(${data});\n`;
        }
        return `Serial2.print(${data});\n`;
    };

    Blockly.Arduino.arduinoTj2560Ext_bluetoothAvailable = function () {
        Blockly.Arduino.includes_.bluetooth = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.setups_.bluetooth = `Serial2.begin(115200);`;

        return [`Serial2.available()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.arduinoTj2560Ext_bluetoothReadAByte = function () {
        Blockly.Arduino.includes_.bluetooth = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.setups_.bluetooth = `Serial2.begin(115200);`;

        return [`Serial2.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.arduinoTj2560Ext_irRecive = function () {
        Blockly.Arduino.includes_.arduinoTj2560Ext_irRecive = `#include <IRremote.h>\n#include <tjIRRemoter.h>`;
        Blockly.Arduino.definitions_.arduinoTj2560Ext_irRecive =
`IRrecv ir(9);

bool irRecive(uint8_t ch, uint8_t key) {
    if (ir.decode()) {
        if (ir.decodedIRData.decodedRawData == IRRCCodeList[key][ch]) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}`;

        const ch = this.getFieldValue('CH');
        const key = this.getFieldValue('KEY');

        return [`irRecive(${ch}, ${key})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
