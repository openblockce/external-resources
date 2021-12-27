const tj2560LineTraker = formatMessage => ({
    name: formatMessage({
        id: 'tj2560LineTraker.name',
        default: 'Line Tracker'
    }),
    extensionId: 'tj2560LineTraker',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560LineTraker.jpg`,
    description: formatMessage({
        id: 'tj2560LineTraker.description',
        default: 'Single line tracker module.'
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

module.exports = tj2560LineTraker;
