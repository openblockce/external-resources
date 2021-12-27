const tj2560FiveRgbLed = formatMessage => ({
    name: formatMessage({
        id: 'tj2560FiveRgbLed.name',
        default: '5 Rgb Led'
    }),
    extensionId: 'tj2560FiveRgbLed',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560FiveRgbLed.jpg`,
    description: formatMessage({
        id: 'tj2560FiveRgbLed.description',
        default: '5 rgb led module.'
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

module.exports = tj2560FiveRgbLed;
