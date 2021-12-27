const tj2560DoubleTouchButton = formatMessage => ({
    name: formatMessage({
        id: 'tj2560DoubleTouchButton.name',
        default: 'Double Touch Button'
    }),
    extensionId: 'tj2560DoubleTouchButton',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560DoubleTouchButton.jpg`,
    description: formatMessage({
        id: 'tj2560DoubleTouchButton.description',
        default: 'Double touch button module.'
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

module.exports = tj2560DoubleTouchButton;
