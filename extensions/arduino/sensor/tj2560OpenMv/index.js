const tj2560OpenMv = formatMessage => ({
    name: formatMessage({
        id: 'tj2560OpenMv.name',
        default: 'Camera Module'
    }),
    extensionId: 'tj2560OpenMv',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560OpenMv.jpg`,
    description: formatMessage({
        id: 'tj2560OpenMv.description',
        default: 'Camera Module.'
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

module.exports = tj2560OpenMv;
