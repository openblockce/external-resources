const tj2560SmokeRocker = formatMessage => ({
    name: formatMessage({
        id: 'tj2560SmokeRocker.name',
        default: 'Rocker'
    }),
    extensionId: 'tj2560SmokeRocker',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560SmokeRocker.jpg`,
    description: formatMessage({
        id: 'tj2560SmokeRocker.description',
        default: 'Rocker module.'
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

module.exports = tj2560SmokeRocker;
