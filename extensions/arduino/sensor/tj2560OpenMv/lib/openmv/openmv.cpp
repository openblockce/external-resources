#include "openmv.h"

OpenMV::OpenMV(uint8_t rxPin, uint8_t txPin)
{
    openmvSerial = new SoftwareSerial(rxPin, txPin);
}

void OpenMV::begin()
{
    Serial.begin(9600);
    Serial.println("-----------------------");
    Serial.println("| OpenMV start        |");
    Serial.println("-----------------------");
    openmvSerial->begin(115200);
}

void OpenMV::recive_data()
{
    Serial.println("Info: Waiting for the data to be returned...");
    uint32_t timeoutCounter = 0;
    while (1)
    {
        while (openmvSerial->available())
        {
            char IncomingByte = openmvSerial->read();
            if (IncomingByte == '$')
            {
                StartBit = true;
                InputString = IncomingByte;
            }
            else if (StartBit == true && IncomingByte != '#')
            {
                InputString += IncomingByte;
            }
            else if (IncomingByte == '#')
            {
                NewLineReceived = true;
                StartBit = false;
                InputString += IncomingByte;
            }
            else
            {
                Serial.println("Error: Not a valid data.");
                break;
            }
        }
        if (NewLineReceived)
        {
            Serial.print("Info: Rx data: ");
            Serial.println(InputString);
            parse_data();
            break;
        }
        delay(1);
        timeoutCounter++;
        if(timeoutCounter > timeoutTime){
            Serial.println("Error: Timeout.");
            break;
        }
    }
}

void OpenMV::parse_data()
{
    if (InputString.indexOf('$') == 0)
    {
        if (InputString.indexOf('#') > 0)
        {
            int i = InputString.indexOf('$'); //寻找以$开头,#结束中间的字符
            int j = InputString.indexOf(',');
            int jj = InputString.indexOf(',', j + 1);
            int jjj = InputString.indexOf(',', jj + 1);
            int jjjj = InputString.indexOf(',', jjj + 1);
            int err = InputString.indexOf(',', jjjj + 1);
            int k = InputString.indexOf('#');

            if ((k > i) & (err == -1))
            {
                cmd = InputString.substring(i + 1, j);
                mode = InputString.substring(j + 1, jj);
                z = InputString.substring(jj + 1, jjj);
                x = InputString.substring(jjj + 1, jjjj);
                y = InputString.substring(jjjj + 1, k);
                //int m_x = _x.toInt();
                Serial.print("Info: Rx packet: cmd:");
                Serial.print(cmd);
                Serial.print("  mode:");
                Serial.print(mode);
                Serial.print("  opt:");
                Serial.print(z);
                Serial.print("  x:");
                Serial.print(x);
                Serial.print("  y:");
                Serial.println(y);
                Serial.println("");
            }
            else
            {
                Serial.println("data erro");
            }
        }
        else
        {
            Serial.println("# erro");
        }
    }
    else
    {
        Serial.println("$ erro");
    }
}

void OpenMV::clear_data()
{
    cmd = "";
    mode = "";
    z = "";
    x = "";
    y = "";

    NewLineReceived = false;
    StartBit = false;
    InputString = "";
}

void OpenMV::setMode(uint8_t mode)
{
    if(mode == openMVMode){
        Serial.println("Warn: Repeat setting current mode.");
        return;
    }
    clear_data();
    timeoutTime = 5000;

    String txData = "$";
    txData += mode;
    txData += ",0,0,0,0#";

    // Serial.print("Info: setMode() tx data: ");
    // Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
    openMVMode = mode;
    delay(3000);
}

void OpenMV::setLight(uint8_t mode)
{
    clear_data();
    timeoutTime = 2000;

    String txData = "$";
    txData += openMVMode;
    txData += ",D,";
    txData += mode;
    txData += ",0,0#";

    // Serial.print("Info: setLight() tx data: ");
    // Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

void OpenMV::resetWhiteBalance()
{
    if(openMVMode != 1){
        Serial.println("Warn: Cannot reset white balance in this mode.");
        return;
    }

    clear_data();
    timeoutTime = 2000;

    String txData = "$1,C,0,0,0#";

    // Serial.print("Info: resetWhiteBalance() tx data: ");
    // Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

void OpenMV::learnColorBlock()
{
    clear_data();
    timeoutTime = 5000;

    String txData = "$1,A,0,0,0#";

    // Serial.print("Info: learnColorBlock() tx data: ");
    // Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

void OpenMV::readColorBlockPos()
{
    clear_data();
    timeoutTime = 500;

    String txData = "$1,B,0,0,0#";

    // Serial.print("Info: readColorBlockPos() tx data: ");
    // Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

void OpenMV::getQRCodeInfo(uint8_t type)
{
    clear_data();
    timeoutTime = 500;

    String txData = "$2,A,";
    txData += type;
    txData += ",0,0#";

    // Serial.print("Info: getQRCodeInfo() tx data: ");
    // Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

bool OpenMV::isGetQRCode()
{
    clear_data();
    timeoutTime = 500;

    String txData = "$2,A,6,0,0#";

    // Serial.print("Info: isGetQRCode() tx data: ");
    // Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
    return x.toInt();
}

void OpenMV::setLineTrackMode(uint8_t type)
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,A,";
    txData += type;
    txData += ",0,0#";

    Serial.print("Info: setLineTrackMode() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

void OpenMV::setFlipVertical(bool state)
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,B,";
    txData += state;
    txData += ",0,0#";

    Serial.print("Info: setFlipVertical() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

void OpenMV::setFlipHorizontal(bool state)
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,C,";
    txData += state;
    txData += ",0,0#";

    Serial.print("Info: setFlipHorizontal() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

int16_t OpenMV::readLineDistanceWithEdge()
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,E,0,0,0#";

    Serial.print("Info: readLineDistanceWithEdge() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
    return z.toInt();
}

int16_t OpenMV::readLineAngle()
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,F,0,0,0#";

    Serial.print("Info: readLineAngle() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
    return z.toInt();
}

int16_t OpenMV::readLineLength()
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,G,0,0,0#";

    Serial.print("Info: readLineLength() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
    return z.toInt();
}

int16_t OpenMV::readErrorOutput()
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,H,0,0,0#";

    Serial.print("Info: readErrorOutput() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
    return z.toInt();
}

void OpenMV::setLineTrackOpt(uint8_t mode)
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,I,";
    txData += mode;
    txData += ",0,0#";

    Serial.print("Info: setLineTrackOpt() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

void OpenMV::setLineTrackThreshold(uint8_t min, uint8_t max)
{
    clear_data();
    timeoutTime = 1000;

    String txData = "$3,I,0,";
    txData += min;
    txData += ",";
    txData += max;
    txData += "#";

    Serial.print("Info: setLineTrackThreshold() tx data: ");
    Serial.println(txData);

    openmvSerial->print(txData);
    recive_data();
}

