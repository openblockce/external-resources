const tj2560Ps2 = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Ps2.name',
        default: 'PS2 Remote Control'
    }),
    extensionId: 'tj2560Ps2',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Ps2.jpg`,
    description: formatMessage({
        id: 'tj2560Ps2.description',
        default: 'PS2 wireless remote controller.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: null
});

module.exports = tj2560Ps2;
