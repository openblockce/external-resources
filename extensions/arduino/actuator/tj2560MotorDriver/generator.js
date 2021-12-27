/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.l298n_init = function (block) {
        const ch = Blockly.Arduino.valueToCode(block, 'CH', Blockly.Arduino.ORDER_ATOMIC);
        const in1 = block.getFieldValue('IN1');
        const in2 = block.getFieldValue('IN2');
        const en = block.getFieldValue('EN');

        Blockly.Arduino.includes_.l298n_init = `#include <L298N.h>`;
        Blockly.Arduino.definitions_[`l298n_init_${ch}_${in1}_${in2}_${en}`] =
          `L298N motor_${ch}(${en}, ${in1}, ${in2});`;
        return '';
    };

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
