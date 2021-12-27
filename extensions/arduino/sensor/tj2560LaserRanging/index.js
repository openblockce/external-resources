const tj2560LaserRanging = formatMessage => ({
    name: formatMessage({
        id: 'tj2560LaserRanging.name',
        default: 'Laser Ranging'
    }),
    extensionId: 'tj2560LaserRanging',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560LaserRanging.jpg`,
    description: formatMessage({
        id: 'tj2560LaserRanging.description',
        default: 'Laser ranging module.'
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

module.exports = tj2560LaserRanging;
