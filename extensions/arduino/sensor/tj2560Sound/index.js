const tj2560Sound = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Sound.name',
        default: 'Sound Sensor'
    }),
    extensionId: 'tj2560Sound',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Sound.jpg`,
    description: formatMessage({
        id: 'tj2560Sound.description',
        default: 'Sound sensor module.'
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

module.exports = tj2560Sound;
