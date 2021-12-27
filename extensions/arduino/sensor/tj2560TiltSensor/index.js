const tj2560TiltSensor = formatMessage => ({
    name: formatMessage({
        id: 'tj2560TiltSensor.name',
        default: 'Tilt Sensor'
    }),
    extensionId: 'tj2560TiltSensor',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560TiltSensor.jpg`,
    description: formatMessage({
        id: 'tj2560TiltSensor.description',
        default: 'Tilt sensor module.'
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

module.exports = tj2560TiltSensor;
