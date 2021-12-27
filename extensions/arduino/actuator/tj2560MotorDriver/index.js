const tj2560MotorDriver = formatMessage => ({
    name: formatMessage({
        id: 'tj2560MotorDriver.name',
        default: 'Motor Driver'
    }),
    extensionId: 'tj2560MotorDriver',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560MotorDriver.jpg`,
    description: formatMessage({
        id: 'tj2560MotorDriver.description',
        default: 'Connected to the p6 interface, allowing you to drive 4 additional motors.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: null
});

module.exports = tj2560MotorDriver;
