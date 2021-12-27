const tj2560Esp32RemoteControl = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Esp32RemoteControl.name',
        default: 'Wireless Remote Control'
    }),
    extensionId: 'tj2560Esp32RemoteControl',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Esp32RemoteControl.jpg`,
    description: formatMessage({
        id: 'tj2560Esp32RemoteControl.description',
        default: 'Esp32 Wireless remote control.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: null
});

module.exports = tj2560Esp32RemoteControl;
