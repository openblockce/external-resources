#include "esp32RemoteControl.h"

ESPRC::ESPRC()
{
    lu = 0;
    ld = 0;
    ll = 0;
    lr = 0;
    ra = 0;
    rb = 0;
    rc = 0;
    rd = 0;
    mf = 0;

    lx = 125;
    ly = 125;
    rx = 125;
    ry = 125;
}

void ESPRC::init()
{
    // Serial.begin(115200);
    // Serial.print("hello");
    Serial2.begin(115200);
    last_read = millis();
}

void ESPRC::readData()
{
    // Serial.println("readData");
    double temp = millis() - last_read;

    if (temp < 5) //waited too short
        delay(5 - temp);

    uint8_t txData[5];
    uint8_t revStep = 0;
    uint8_t timeout = 0;

    txData[0] = ESP_RC_HEAD;
    txData[1] = ESP_RC_GETDATA;
    txData[2] = 0x00;
    txData[3] = 0x00;
    txData[4] = ESP_RC_TAIL;

    Serial2.write(txData, 5);

    while (1)
    {
        delay(1);
        timeout++;
        if (timeout > 200)
        {
            // Serial.println("WARN: ESP32 RC read data timeout");
            break;
        }

        while (Serial2.available())
        {
            uint8_t data = Serial2.read();

            if (revStep == 0 && data == ESP_RC_HEAD)
            {
                revStep = 1;
            }
            else if (revStep >= 1 && revStep < 7)
            {
                rxData[revStep - 1] = data;
                revStep++;
            }
            else if (revStep == 7 && data == ESP_RC_TAIL)
            {
                revStep = 8;
            }
        }
        if (revStep == 8)
        {
            revStep = 0;

            lu = (rxData[0] >> 7) & 0x01;
            ld = (rxData[0] >> 6) & 0x01;
            ll = (rxData[0] >> 5) & 0x01;
            lr = (rxData[0] >> 4) & 0x01;
            ra = (rxData[0] >> 3) & 0x01;
            rb = (rxData[0] >> 2) & 0x01;
            rc = (rxData[0] >> 1) & 0x01;
            rd = rxData[0] & 0x01;

            mf = rxData[1] & 0x01;

            lx = rxData[2];
            ly = rxData[3];
            rx = rxData[4];
            ry = rxData[5];

            break;
        }
    }

    // Serial.print("Info: ESP32 Rc get data = ");
    // Serial.print(lu);
    // Serial.print(" ");
    // Serial.print(ld);
    // Serial.print(" ");
    // Serial.print(ll);
    // Serial.print(" ");
    // Serial.print(lr);
    // Serial.print(" ");
    // Serial.print(ra);
    // Serial.print(" ");
    // Serial.print(rb);
    // Serial.print(" ");
    // Serial.print(rc);
    // Serial.print(" ");
    // Serial.print(rd);
    // Serial.print(" ");

    // Serial.print(mf);
    // Serial.print(" ");

    // Serial.print(lx);
    // Serial.print(" ");
    // Serial.print(ly);
    // Serial.print(" ");
    // Serial.print(rx);
    // Serial.print(" ");
    // Serial.print(ry);
    // Serial.println("");

    last_read = millis();
}

void ESPRC::setBuzzer(uint16_t freq)
{
    // Serial.println("setBuzzer");

    uint8_t txData[5];

    txData[0] = ESP_RC_HEAD;
    txData[1] = ESP_RC_SETBUZZER;
    txData[2] = (freq >> 8) & 0xFF;
    txData[3] = freq & 0xFF;
    txData[4] = ESP_RC_TAIL;

    Serial2.write(txData, 5);
}
