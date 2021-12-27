const tj2560WaterLevel = formatMessage => ({
    name: formatMessage({
        id: 'tj2560WaterLevel.name',
        default: 'Water Level'
    }),
    extensionId: 'tj2560WaterLevel',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560WaterLevel.jpg`,
    description: formatMessage({
        id: 'tj2560WaterLevel.description',
        default: 'Water level module.'
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

module.exports = tj2560WaterLevel;
