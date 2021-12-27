/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560DHT11_CATEGORY: 'DHT11',
        TJ2560DHT11_READHUMIDITY: 'read %1 dht11 humidity',
        TJ2560DHT11_READTEMPERATURE: 'read %1 dht11 temperature'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560DHT11_CATEGORY: '温湿度传感器',
        TJ2560DHT11_READHUMIDITY: '读取 %1 温湿度传感器湿度值',
        TJ2560DHT11_READTEMPERATURE: '读取 %1 温湿度传感器温度值 %2'
    });
    return Blockly;
}

exports = addMsg;
