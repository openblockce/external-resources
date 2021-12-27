#include "tj2560MotorDriver.h"

Tj2560MotorDriver::Tj2560MotorDriver()
{
    pwmController = new PCA9685();
}

void Tj2560MotorDriver::init()
{
    Wire.begin();
    pwmController->resetDevices();
    pwmController->init();
    pwmController->setPWMFrequency(500);
}

void Tj2560MotorDriver::run(uint8_t motor, int direction, int speed)
{
    switch (motor)
    {
    case Driver_M1:
        if (direction == Driver_FORWARD)
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(1, 4096);
                pwmController->setChannelPWM(2, 0);
                pwmController->setChannelPWM(0, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(1, 0);
                pwmController->setChannelPWM(2, 4096);
                pwmController->setChannelPWM(0, -speed * 16);
            }
        }
        else
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(1, 0);
                pwmController->setChannelPWM(2, 4096);
                pwmController->setChannelPWM(0, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(1, 4096);
                pwmController->setChannelPWM(2, 0);
                pwmController->setChannelPWM(0, -speed * 16);
            }
        }
        break;

    case Driver_M2:
        if (direction == Driver_FORWARD)
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(3, 4096);
                pwmController->setChannelPWM(4, 0);
                pwmController->setChannelPWM(5, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(3, 0);
                pwmController->setChannelPWM(4, 4096);
                pwmController->setChannelPWM(5, -speed * 16);
            }
        }
        else
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(3, 0);
                pwmController->setChannelPWM(4, 4096);
                pwmController->setChannelPWM(5, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(3, 4096);
                pwmController->setChannelPWM(4, 0);
                pwmController->setChannelPWM(5, -speed * 16);
            }
        }
        break;

    case Driver_M3:
        if (direction == Driver_FORWARD)
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(11, 4096);
                pwmController->setChannelPWM(12, 0);
                pwmController->setChannelPWM(10, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(11, 0);
                pwmController->setChannelPWM(12, 4096);
                pwmController->setChannelPWM(10, -speed * 16);
            }
        }
        else
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(11, 0);
                pwmController->setChannelPWM(12, 4096);
                pwmController->setChannelPWM(10, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(11, 4096);
                pwmController->setChannelPWM(12, 0);
                pwmController->setChannelPWM(10, -speed * 16);
            }
        }
        break;

    case Driver_M4:
        if (direction == Driver_FORWARD)
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(13, 4096);
                pwmController->setChannelPWM(14, 0);
                pwmController->setChannelPWM(15, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(13, 0);
                pwmController->setChannelPWM(14, 4096);
                pwmController->setChannelPWM(15, -speed * 16);
            }
        }
        else
        {
            if (speed > 0)
            {
                pwmController->setChannelPWM(13, 0);
                pwmController->setChannelPWM(14, 4096);
                pwmController->setChannelPWM(15, speed * 16);
            }
            else
            {
                pwmController->setChannelPWM(13, 4096);
                pwmController->setChannelPWM(14, 0);
                pwmController->setChannelPWM(15, -speed * 16);
            }
        }
        break;
    }
}

void Tj2560MotorDriver::stop(uint8_t motor)
{
    switch (motor)
    {
    case Driver_M1:
        pwmController->setChannelPWM(1, 0);
        pwmController->setChannelPWM(2, 0);
        pwmController->setChannelPWM(0, 0);
        break;
    case Driver_M2:
        pwmController->setChannelPWM(3, 0);
        pwmController->setChannelPWM(4, 0);
        pwmController->setChannelPWM(5, 0);
        break;
    case Driver_M3:
        pwmController->setChannelPWM(11, 0);
        pwmController->setChannelPWM(12, 0);
        pwmController->setChannelPWM(10, 0);
        break;
    case Driver_M4:
        pwmController->setChannelPWM(13, 0);
        pwmController->setChannelPWM(14, 0);
        pwmController->setChannelPWM(15, 0);
        break;
    }
}
