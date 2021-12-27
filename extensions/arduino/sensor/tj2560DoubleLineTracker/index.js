const tj2560DoubleLineTracker = formatMessage => ({
    name: formatMessage({
        id: 'tj2560DoubleLineTracker.name',
        default: 'Double Line Tracker'
    }),
    extensionId: 'tj2560DoubleLineTracker',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560DoubleLineTracker.jpg`,
    description: formatMessage({
        id: 'tj2560DoubleLineTracker.description',
        default: 'Double line tracker module.'
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

module.exports = tj2560DoubleLineTracker;
