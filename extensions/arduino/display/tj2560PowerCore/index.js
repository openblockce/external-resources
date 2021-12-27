const tj2560PowerCore = formatMessage => ({
    name: formatMessage({
        id: 'tj2560PowerCore.name',
        default: 'Power Core'
    }),
    extensionId: 'tj2560PowerCore',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560PowerCore.png`,
    description: formatMessage({
        id: 'tj2560PowerCore.description',
        default: 'Contain key, rgb led and digital display.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display', 'sensor'],
    helpLink: null
});

module.exports = tj2560PowerCore;
