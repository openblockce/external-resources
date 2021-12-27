/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tj2560DoubleLineTracker_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560DOUBLELINETRACKER_READ,
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
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SIDE',
                        options: [
                            [Blockly.Msg.TJ2560DOUBLELINETRACKER_LEFT, 'S5'],
                            [Blockly.Msg.TJ2560DOUBLELINETRACKER_RIGHT, 'S1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560DOUBLELINETRACKER_STATE_LIGHT, '1'],
                            [Blockly.Msg.TJ2560DOUBLELINETRACKER_STATE_DARK, '0']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
