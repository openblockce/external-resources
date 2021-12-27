/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#06603e';
    const secondaryColour = '#06603e';
    
    const sColour = '#4CBFE6';
    const sSecondaryColour = '#2E8EB8';

    /* ---------------- 板载 rgb led ------------------ */
    Blockly.Blocks.tj2560PowerCore_setPixelColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560POWERCORE_SETPIXELCOLOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560PowerCore_fill = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560POWERCORE_FILL,
                args0: [
                    {
                        type: 'input_value',
                        name: 'FIRST'
                    },
                    {
                        type: 'input_value',
                        name: 'COUNT'
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560PowerCore_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560POWERCORE_COLOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tj2560PowerCore_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560POWERCORE_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BRT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560PowerCore_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560POWERCORE_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* ---------------- 板载数码管 ------------------ */
    Blockly.Blocks.tj2560PowerCore_hc595Show = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560POWERCORE_HC595SHOW,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DATA',
                        options: [
                            ['0', 'B11000000'],
                            ['1', 'B11111001'],
                            ['2', 'B10100100'],
                            ['3', 'B10110000'],
                            ['4', 'B10011001'],
                            ['5', 'B10010010'],
                            ['6', 'B10000010'],
                            ['7', 'B11111000'],
                            ['8', 'B10000000'],
                            ['9', 'B10010000'],
                            ['0.', 'B01000000'],
                            ['1.', 'B01111001'],
                            ['2.', 'B00100100'],
                            ['3.', 'B00110000'],
                            ['4.', 'B00011001'],
                            ['5.', 'B00010010'],
                            ['6.', 'B00000010'],
                            ['7.', 'B01111000'],
                            ['8.', 'B00000000'],
                            ['9.', 'B00010000'],
                            [Blockly.Msg.TJ2560POWERCORE_HC595SHOWNULL, 'B11111111']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* ---------------- 板载按键 ------------------ */
    Blockly.Blocks.tj2560PowerCore_readKey = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560POWERCORE_READKEY, // read on board key %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'KEY',
                        options: [
                            ['K1', 'A9'],
                            ['K2', 'A6']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560POWERCORE_BUTTONSTATE_ACTIVE, '1'],
                            [Blockly.Msg.TJ2560POWERCORE_BUTTONSTATE_INACTIVE, '0']
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
