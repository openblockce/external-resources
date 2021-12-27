/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560OpenMv_setPort = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.tj2560OpenMv_setPort = `#include <openmv.h>`;
        Blockly.Arduino.definitions_.tj2560OpenMv_setPort = `OpenMV openmv(pinMap[${port}][S2], pinMap[${port}][S1]);`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `openmv.begin();\n`;
    };

    Blockly.Arduino.tj2560OpenMv_setMode = function (block) {
        const mode = block.getFieldValue('MODE');
        return `openmv.setMode(${mode});\n`;
    };

    Blockly.Arduino.tj2560OpenMv_setLight = function (block) {
        const mode = block.getFieldValue('MODE');
        return `openmv.setLight(${mode});\n`;
    };

    Blockly.Arduino.tj2560OpenMv_resetWhiteBalance = function () {
        return `openmv.resetWhiteBalance();\n`;
    };

    Blockly.Arduino.tj2560OpenMv_learnColorBlock = function () {
        return `openmv.learnColorBlock();\n`;
    };

    Blockly.Arduino.tj2560OpenMv_getColorBlockPosition = function () {
        return `openmv.readColorBlockPos();\n`;
    };

    Blockly.Arduino.tj2560OpenMv_colorBlockPositionX = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_colorBlockPositionY = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getQRCodePosition = function () {
        return `openmv.getQRCodeInfo(1);\n`;
    };

    Blockly.Arduino.tj2560OpenMv_QRCodePositionX = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_QRCodePositionY = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getQRCodeWHPosition = function () {
        return `openmv.getQRCodeInfo(2);\n`;
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeWHPositionX = function () {
        return [`openmv.x.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeWHPositionY = function () {
        return [`openmv.y.toInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getQRCodeValue = function () {
        return `openmv.getQRCodeInfo(3);\n`;
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeValueString = function () {
        return [`openmv.x`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeValueVersion = function () {
        return [`openmv.y`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getQRCodeECCMASK = function () {
        return `openmv.getQRCodeInfo(4);\n`;
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeECC = function () {
        return [`openmv.x`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeMask = function () {
        return [`openmv.y`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getQRCodeDataTypeAndECI = function () {
        return `openmv.getQRCodeInfo(5);\n`;
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeDataType = function () {
        return [`openmv.x`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_QRCodeDataECI = function () {
        return [`openmv.y`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_isGetQRCode = function () {
        return [`openmv.isGetQRCode()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_setLineTrackMode = function (block) {
        const mode = block.setLineTrackMode('MODE');
        return `openmv.setMode(${mode});\n`;
    };

    Blockly.Arduino.setFlipVertical = function (block) {
        const dir = block.setLineTrackMode('DIR');
        const sta = block.setLineTrackMode('STA');

        if (dir === '1') {
            return `openmv.setFlipVertical(${sta});\n`;
        }
        return `openmv.setFlipHorizontal(${sta});\n`;
    };

    Blockly.Arduino.tj2560OpenMv_getLinePotion = function () {
        return [`openmv.readLineDistanceWithEdge()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getLineAngle = function () {
        return [`openmv.readLineAngle()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getLineLength = function () {
        return [`openmv.readLineLength()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_getLineErrorOutput = function () {
        return [`openmv.readErrorOutput()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tj2560OpenMv_setLineColor = function (block) {
        const mode = block.setLineTrackMode('MODE');
        return `openmv.setLineTrackOpt(${mode});\n`;
    };

    Blockly.Arduino.tj2560OpenMv_setLineThreshold = function (block) {
        const min = Blockly.Arduino.valueToCode(block, 'MIN', Blockly.Arduino.ORDER_ATOMIC);
        const max = Blockly.Arduino.valueToCode(block, 'MAX', Blockly.Arduino.ORDER_ATOMIC);

        return `openmv.setLineTrackThreshold(${min}, ${max});\n`;
    };

    return Blockly;
}

exports = addGenerator;
