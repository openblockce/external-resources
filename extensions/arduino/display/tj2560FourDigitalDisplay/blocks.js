/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#06603e';
    const secondaryColour = '#06603e';

    Blockly.Blocks.tj2560FourDigitalDisplay_showNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560FOURDIGITALDISPLAY_SHOWNUMBER, // 4 digital display show number %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P6', 'P6']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUMBER'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560FourDigitalDisplay_showNumberBit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560FOURDIGITALDISPLAY_SHOWNUMBERBIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P6', 'P6']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'N1'
                    },
                    {
                        type: 'input_value',
                        name: 'N2'
                    },
                    {
                        type: 'input_value',
                        name: 'N3'
                    },
                    {
                        type: 'input_value',
                        name: 'N4'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.tj2560FourDigitalDisplay_setDot = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560FOURDIGITALDISPLAY_SETDOT, // 4 digital display set %1 rd dot %2
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P6', 'P6']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            ['1', '0'],
                            ['2', '1'],
                            ['3', '2'],
                            ['4', '3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.TJ2560FOURDIGITALDISPLAY_STATE_ON, '1'],
                            [Blockly.Msg.TJ2560FOURDIGITALDISPLAY_STATE_OFF, '0']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560FourDigitalDisplay_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.tj2560FourDigitalDisplay_CLEAR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P6', 'P6']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
