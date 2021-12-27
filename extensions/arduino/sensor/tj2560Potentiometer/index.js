const tj2560Potentiometer = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Potentiometer.name',
        default: 'tj2560Potentiometer'
    }),
    extensionId: 'tj2560Potentiometer',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Potentiometer.jpg`,
    description: formatMessage({
        id: 'tj2560Potentiometer.description',
        default: 'tj2560Potentiometer module.'
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

module.exports = tj2560Potentiometer;
