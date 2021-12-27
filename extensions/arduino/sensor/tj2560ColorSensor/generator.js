/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560ColorSensor_read = function (block) {
        const colour = block.getFieldValue('COLOUR');

        Blockly.Arduino.includes_.tj2560ColorSensor_read = `#include <Wire.h>\n#include <Adafruit_TCS34725.h>`;
        Blockly.Arduino.setups_.tj2560ColorSensor_read = `tcs.begin();`;

        Blockly.Arduino.definitions_.tj2560ColorSensor_read =
`Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_700MS, TCS34725_GAIN_1X);
uint32_t tcsGetColor(uint8_t rgb) {
    uint16_t r = 0;
    uint16_t g = 0;
    uint16_t b = 0;
    uint16_t c = 0;
    tcs.getRawData(&r, &g, &b, &c);
    r /= 32;
    g /= 32;
    b /= 32;
    if(rgb == 0)
        return r;
    else if(rgb == 1)
        return g;
    else if(rgb == 2)
        return b;
    else {
        if(r > 255) r = 255;
        if(g > 255) g = 255;
        if(b > 255) b = 255;
        return ((uint32_t)r << 16) + ((uint32_t)g << 8) + (uint32_t)b;
    }

}
`;

        return [`tcsGetColor(${colour})`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
