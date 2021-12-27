/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560LaserRanging_read = function (block) {

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;
        Blockly.Arduino.includes_.tj2560LaserRanging = `#include <Wire.h>\n#include <VL53L0X.h>`;
        Blockly.Arduino.definitions_.tj2560LaserRanging_read = `VL53L0X laserRanging;`;

        Blockly.Arduino.setups_.tj2560LaserRanging_read = `Wire.begin();\n  laserRanging.setTimeout(500);\n  ` +
            `laserRanging.init();\n  laserRanging.setMeasurementTimingBudget(200000);`;

        return [`laserRanging.readRangeSingleMillimeters()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
