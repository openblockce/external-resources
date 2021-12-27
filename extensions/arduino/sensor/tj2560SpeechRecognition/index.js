const tj2560SpeechRecognition = formatMessage => ({
    name: formatMessage({
        id: 'tj2560SpeechRecognition.name',
        default: 'Speech Recognition Module'
    }),
    extensionId: 'tj2560SpeechRecognition',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560SpeechRecognition.jpg`,
    description: formatMessage({
        id: 'tj2560SpeechRecognition.description',
        default: 'Speech recognition Module.'
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

module.exports = tj2560SpeechRecognition;
