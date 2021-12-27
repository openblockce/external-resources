const tj2560RgbLed = formatMessage => ({
    name: formatMessage({
        id: 'tj2560RgbLed.name',
        default: 'Single RGB LED'
    }),
    extensionId: 'tj2560RgbLed',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560RgbLed.jpg`,
    description: formatMessage({
        id: 'tj2560RgbLed.description',
        default: 'Single RGB led module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: null
});

module.exports = tj2560RgbLed;
