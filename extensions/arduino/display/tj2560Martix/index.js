const tj2560Martix = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Martix.name',
        default: 'Martix Display'
    }),
    extensionId: 'tj2560Martix',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Martix.jpg`,
    description: formatMessage({
        id: 'tj2560Martix.description',
        default: '8x8 martix display module.'
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

module.exports = tj2560Martix;
