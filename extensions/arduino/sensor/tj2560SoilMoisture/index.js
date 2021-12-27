const tj2560SoilMoisture = formatMessage => ({
    name: formatMessage({
        id: 'tj2560SoilMoisture.name',
        default: 'Soil Moisture'
    }),
    extensionId: 'tj2560SoilMoisture',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560SoilMoisture.jpg`,
    description: formatMessage({
        id: 'tj2560SoilMoisture.description',
        default: 'Soil moisture module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: null,
    tags: ['sensor'],
    helpLink: null
});

module.exports = tj2560SoilMoisture;
