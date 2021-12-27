/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tj2560ColorSensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560COLORSENSOR_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            ['R', '0'],
                            ['G', '1'],
                            ['B', '2'],
                            ['RGB', '3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
