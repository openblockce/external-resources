const tj2560Button = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Button.name',
        default: 'Button'
    }),
    extensionId: 'tj2560Button',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Button.jpg`,
    description: formatMessage({
        id: 'tj2560Button.description',
        default: 'Single button module.'
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

module.exports = tj2560Button;
