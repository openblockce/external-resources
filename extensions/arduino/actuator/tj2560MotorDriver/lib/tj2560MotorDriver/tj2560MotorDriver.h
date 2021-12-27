#ifndef TJ2560MOTORDRIVER_H
#define TJ2560MOTORDRIVER_H

#include "Arduino.h"
#include "PCA9685.h"

#define Driver_FORWARD   1
#define Driver_BACKWARD  2

#define Driver_M1 1
#define Driver_M2 2
#define Driver_M3 3
#define Driver_M4 4

class Tj2560MotorDriver
{
public:
   Tj2560MotorDriver();

   void init();
   void run(uint8_t motor, int direction, int speed);
   void stop(uint8_t motor);

private:
   PCA9685 *pwmController; 
};

#endif