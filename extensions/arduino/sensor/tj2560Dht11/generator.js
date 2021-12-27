/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560Dht11_readHumidity = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.tj2560Dht11_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`dht11_${port}`] = `DHT dht11_${port}(pinMap[${port}][S5], 11);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`dht11_${port}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560Dht11_readTemperature = function (block) {
        const port = block.getFieldValue('PORT');
        const unit = this.getFieldValue('UNIT');

        Blockly.Arduino.includes_.tj2560Dht11_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`dht11_${port}`] = `DHT dht11_${port}(pinMap[${port}][S5], 11);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`dht11_${port}.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
