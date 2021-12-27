/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#9966FF';
    const secondaryColour = '#774DCB';

    Blockly.Blocks.tj2560Ps2_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560PS2_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P1', 'P1'],
                            ['P2', 'P2'],
                            ['P3', 'P3'],
                            ['P4', 'P4'],
                            ['P5', 'P5'],
                            ['P6', 'P6']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560Ps2_readData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560PS2_READDATA,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560Ps2_getButton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560PS2_GETBUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.TJ2560PS2_UP, 'PSB_PAD_UP'],
                            [Blockly.Msg.TJ2560PS2_DOWN, 'PSB_PAD_DOWN'],
                            [Blockly.Msg.TJ2560PS2_LEFT, 'PSB_PAD_LEFT'],
                            [Blockly.Msg.TJ2560PS2_RIGHT, 'PSB_PAD_RIGHT'],
                            [Blockly.Msg.TJ2560PS2_TRIANGLE, 'PSB_TRIANGLE'],
                            [Blockly.Msg.TJ2560PS2_CIRCLE, 'PSB_CIRCLE'],
                            [Blockly.Msg.TJ2560PS2_CROSS, 'PSB_CROSS'],
                            [Blockly.Msg.TJ2560PS2_SQUARE, 'PSB_SQUARE'],
                            ['L1', 'PSB_L1'],
                            ['L2', 'PSB_L2'],
                            ['L3', 'PSB_L3'],
                            ['R1', 'PSB_R1'],
                            ['R2', 'PSB_R2'],
                            ['R3', 'PSB_R3'],
                            [Blockly.Msg.TJ2560PS2_SELECT, 'PSB_SELECT'],
                            [Blockly.Msg.TJ2560PS2_START, 'PSB_START']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.tj2560Ps2_GetJoystick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560PS2_GETJOYSTICK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOYSTICK',
                        options: [
                            ['LX', 'PSS_LX'],
                            ['LY', 'PSS_LY'],
                            ['RX', 'PSS_RX'],
                            ['RY', 'PSS_RY']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
