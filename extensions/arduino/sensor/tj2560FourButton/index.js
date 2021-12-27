const tj2560FourButton = formatMessage => ({
    name: formatMessage({
        id: 'tj2560FourButton.name',
        default: '4 Button'
    }),
    extensionId: 'tj2560FourButton',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560FourButton.jpg`,
    description: formatMessage({
        id: 'tj2560FourButton.description',
        default: '4 button module.'
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

module.exports = tj2560FourButton;
