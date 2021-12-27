/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tj2560LaserRanging_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560LASERRANGING_READ,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
