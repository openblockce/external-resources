/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FA3274';
    const secondaryColour = '#B92656';

    Blockly.Blocks.tj2560MotorDriver_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560MOTORDRIVER_RUN,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MOTOR',
                        options: [
                            ['M1', 'Driver_M1'],
                            ['M2', 'Driver_M2'],
                            ['M3', 'Driver_M3'],
                            ['M4', 'Driver_M4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.J2560MOTORDRIVER_CW, 'Driver_FORWARD'],
                            [Blockly.Msg.J2560MOTORDRIVER_CCW, 'Driver_BACKWARD']]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560MotorDriver_stop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560MOTORDRIVER_STOP,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MOTOR',
                        options: [
                            ['M1', 'Driver_M1'],
                            ['M2', 'Driver_M2'],
                            ['M3', 'Driver_M3'],
                            ['M4', 'Driver_M4']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
