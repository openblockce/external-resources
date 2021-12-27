const tj2560Led = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Led.name',
        default: 'Led'
    }),
    extensionId: 'tj2560Led',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Led.jpg`,
    description: formatMessage({
        id: 'tj2560Led.description',
        default: 'Single led module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: null,
    tags: ['display'],
    helpLink: null
});

module.exports = tj2560Led;
