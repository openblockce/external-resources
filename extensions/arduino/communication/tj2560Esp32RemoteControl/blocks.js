/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#9966FF';
    const secondaryColour = '#774DCB';

    Blockly.Blocks.tj2560Esp32RemoteControl_readData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ESP32REMOTECONTROL_READDATA, // wireless remote control read data
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560Esp32RemoteControl_getButton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ESP32REMOTECONTROL_GETBUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_LU, 'lu'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_LD, 'ld'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_LL, 'll'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_LR, 'lr'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_RA, 'ra'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_RB, 'rb'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_RC, 'rc'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_RD, 'rd'],
                            [Blockly.Msg.TJ2560ESP32REMOTECONTROL_MF, 'mf']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.tj2560Esp32RemoteControl_getJoystick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ESP32REMOTECONTROL_GETJOYSTICK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOYSTICK',
                        options: [
                            ['LX', 'lx'],
                            ['LY', 'ly'],
                            ['RX', 'rx'],
                            ['RY', 'ry']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    /* ---------------- 蜂鸣器 ------------------ */
    const note = [
        ['C3', 'note_C3'],
        ['C#3', 'note_Db3'],
        ['D3', 'note_D3'],
        ['D#3', 'note_Eb3'],
        ['E3', 'note_E3'],
        ['F3', 'note_F3'],
        ['F#3', 'note_Gb3'],
        ['G3', 'note_G3'],
        ['G#3', 'note_Ab3'],
        ['A3', 'note_A3'],
        ['A#3', 'note_Bb3'],
        ['B3', 'note_B3'],
        ['C4', 'note_C4'],
        ['C#4', 'note_Db4'],
        ['D4', 'note_D4'],
        ['D#4', 'note_Eb4'],
        ['E4', 'note_E4'],
        ['F4', 'note_F4'],
        ['F#4', 'note_Gb4'],
        ['G4', 'note_G4'],
        ['G#4', 'note_Ab4'],
        ['A4', 'note_A4'],
        ['A#4', 'note_Bb4'],
        ['B4', 'note_B4'],
        ['C5', 'note_C5'],
        ['C#5', 'note_Db5'],
        ['D5', 'note_D5'],
        ['D#5', 'note_Eb5'],
        ['E5', 'note_E5'],
        ['F5', 'note_F5'],
        ['F#5', 'note_Gb5'],
        ['G5', 'note_G5'],
        ['G#5', 'note_Ab5'],
        ['A5', 'note_A5'],
        ['A#5', 'note_Bb5'],
        ['B5', 'note_B5']
    ];

    Blockly.Blocks.tj2560Esp32RemoteControl_playSound = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ESP32REMOTECONTROL_PLAYSOUND,
                args0: [
                    {
                        type: 'input_value',
                        name: 'FREQ'
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.atj2560Esp32RemoteControl_playToneForTime = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ESP32REMOTECONTROL_PLAYTONEFORTIME,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'FREQ',
                        options: note
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
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
