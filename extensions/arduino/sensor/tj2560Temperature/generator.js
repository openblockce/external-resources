/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560Temperature_read = function (block) {
        const port = block.getFieldValue('PORT');
        const unit = block.getFieldValue('UNIT');

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;
        Blockly.Arduino.includes_.tj2560Temperature = `#include <OneWire.h>\n#include <DallasTemperature.h>`;
        Blockly.Arduino.definitions_[`tj2560Temperature_read${port}`] =
            `OneWire ds18b20Wire_${port}(pinMap[${port}][S5]);\nDallasTemperature ds18b20_${port}(&ds18b20Wire_${port});`;

        Blockly.Arduino.setups_[`tj2560Temperature_read${port}`] = `ds18b20_${port}.begin();\n  ds18b20_${port}.requestTemperatures();`;

        Blockly.Arduino.loops_[`tj2560Temperature_read${port}`] = `ds18b20_${port}.requestTemperatures();`;

        if (unit === 'false') {
            return [`ds18b20_${port}.getTempCByIndex(0)`, Blockly.Arduino.ORDER_ATOMIC];
        }
        return [`ds18b20_${port}.getTempFByIndex(0)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
