const tj2560Dht11 = formatMessage => ({
    name: formatMessage({
        id: 'tj2560Dht11.name',
        default: 'DHT11 Sensor'
    }),
    extensionId: 'tj2560Dht11',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560Dht11.jpg`,
    description: formatMessage({
        id: 'tj2560Dht11.description',
        default: 'DHT Temperature and humidity sensor module.'
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

module.exports = tj2560Dht11;
