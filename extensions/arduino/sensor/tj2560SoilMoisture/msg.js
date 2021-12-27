/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SOILMOISTURE_CATEGORY: 'Soil Moisture',
        TJ2560SOILMOISTURE_READDIGITAL: 'read %1 soil moisture digital',
        TJ2560SOILMOISTURE_READANALOG: 'read %1 soil moisture analog',
        TJ2560SOILMOISTURE_STATE_WET: 'wet',
        TJ2560SOILMOISTURE_STATE_DRY: 'dry'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SOILMOISTURE_CATEGORY: '土壤湿度传感器',
        TJ2560SOILMOISTURE_READDIGITAL: '读取 %1 土壤湿度传感器状态 %2',
        TJ2560SOILMOISTURE_READANALOG: '读取 %1 土壤湿度传感器',
        TJ2560SOILMOISTURE_STATE_WET: '潮湿',
        TJ2560SOILMOISTURE_STATE_DRY: '干燥'
    });
    return Blockly;
}

exports = addMsg;
