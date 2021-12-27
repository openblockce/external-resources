const tj2560Temperature = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Temperature.name',
        default: 'Temperature Sensor'
    }),
    extensionId: 'tj2560Temperature',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Temperature.jpg`,
    description: formatMessage({
        id: 'tj2560Temperature.description',
        default: 'Temperature sensor module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: null
});

module.exports = tj2560Temperature;
