const tj2560Ultrasonic = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Ultrasonic.name',
        default: 'Ultrasonic'
    }),
    extensionId: 'tj2560Ultrasonic',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'Liang',
    iconURL: `asset/tj2560Ultrasonic.jpg`,
    description: formatMessage({
        id: 'tj2560Ultrasonic.description',
        default: 'Ultrasonic distance measurement module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: null
});

module.exports = tj2560Ultrasonic;
