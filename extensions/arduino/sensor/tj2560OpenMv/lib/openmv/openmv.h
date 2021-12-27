
#include <SoftwareSerial.h>
#include <Arduino.h>

class OpenMV
{
public:
    OpenMV(uint8_t rxPin, uint8_t txPin);

    void begin();

    void setMode(uint8_t mode);
    void setLight(uint8_t mode);
    void resetWhiteBalance();

    void learnColorBlock();
    void readColorBlockPos();

    void getQRCodeInfo(uint8_t type);
    bool isGetQRCode();

    void setLineTrackMode(uint8_t type);
    void setFlipVertical(bool state);
    void setFlipHorizontal(bool state);
    int16_t readLineDistanceWithEdge();
    int16_t readLineAngle();
    int16_t readLineLength();
    int16_t readErrorOutput();
    void setLineTrackOpt(uint8_t mode);
    void setLineTrackThreshold(uint8_t min, uint8_t max);

    // 5 位解析分割的数据
    String cmd = "";
    String mode = "";
    String z = "";
    String x = "";
    String y = "";

private:
    SoftwareSerial *openmvSerial;
    void *Debug;
    bool NewLineReceived = false; //前一次数据结束标志
    bool StartBit = false;        //协议开始标志
    String InputString = "";         //用来储存接收到的内容
    uint32_t timeoutTime = 1000;  // 超时参数

    uint8_t openMVMode = 0;

    void recive_data();
    void parse_data();
    void clear_data();
};
