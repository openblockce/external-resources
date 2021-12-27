/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560MotorDriver_run = function (block) {
        Blockly.Arduino.includes_.tj2560MotorDriver_init = `#include <tj2560MotorDriver.h>`;
        Blockly.Arduino.definitions_.tj2560MotorDriver_init = `Tj2560MotorDriver driver;`;
        Blockly.Arduino.setups_.tj2560MotorDriver_init = `driver.init();`;

        const motor = this.getFieldValue('MOTOR');
        const dir = this.getFieldValue('DIR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `driver.run(${motor}, ${dir}, ${speed});\n`;
    };

    Blockly.Arduino.tj2560MotorDriver_stop = function (block) {
        Blockly.Arduino.includes_.tj2560MotorDriver_init = `#include <tj2560MotorDriver.h>`;
        Blockly.Arduino.definitions_.tj2560MotorDriver_init = `Tj2560MotorDriver driver;`;
        Blockly.Arduino.setups_.tj2560MotorDriver_init = `driver.init();`;

        const motor = this.getFieldValue('MOTOR');

        return `driver.stop(${motor});\n`;
    };

    return Blockly;
}

exports = addGenerator;
