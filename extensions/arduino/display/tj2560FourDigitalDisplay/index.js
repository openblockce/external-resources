const tj2560FourDigitalDisplay = formatMessage => ({
    name: formatMessage({
        id: 'tj2560FourDigitalDisplay.name',
        default: '4 Digital Display'
    }),
    extensionId: 'tj2560FourDigitalDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560FourDigitalDisplay.jpg`,
    description: formatMessage({
        id: 'tj2560FourDigitalDisplay.description',
        default: '4 digital display module.'
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

module.exports = tj2560FourDigitalDisplay;
