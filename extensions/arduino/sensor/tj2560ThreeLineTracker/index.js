const tj2560ThreeLineTracker = formatMessage => ({
    name: formatMessage({
        id: 'tj2560ThreeLineTracker.name',
        default: '3 Line Tracker'
    }),
    extensionId: 'tj2560ThreeLineTracker',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560ThreeLineTracker.jpg`,
    description: formatMessage({
        id: 'tj2560ThreeLineTracker.description',
        default: '3 line tracker module.'
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

module.exports = tj2560ThreeLineTracker;
