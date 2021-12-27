#ifndef __ESP32REMOTECONTROL_H
#define __ESP32REMOTECONTROL_H

#include <Arduino.h>

#define ESP_RC_HEAD      0xAA
#define ESP_RC_GETDATA   0x00
#define ESP_RC_SETBUZZER 0x01
#define ESP_RC_TAIL      0xCC

class ESPRC
{
public:
    ESPRC();

    void init();
    void readData();
    void setBuzzer(uint16_t freq);

    bool lu, ld, ll, lr, ra, rb, rc, rd, mf;
    uint8_t lx, ly, rx, ry;

private:
    uint8_t rxData[6];
    unsigned long last_read;
};

#endif
