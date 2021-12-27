#ifndef IO_TJ2560_H
#define IO_TJ2560_H

#include <Arduino.h>


#define P1 0
#define P2 1
#define P3 2
#define P4 3
#define P5 4
#define P6 5

#define M1 6
#define M2 7
#define M3 8
#define M4 9

#define E1 10
#define E4 11

#define S1 0
#define S2 1
#define S5 2
#define S6 3

#define EN 2

#define NC 0

const uint8_t pinMap[12][4] =
{
    {A4, A5,  4,  5},   // P1
    {A1, A0, 37,  6},   // P2
    {A3, A2, 42, 10},   // P3
    {A14, A15, 25, 7},  // P4
    {A13, A12, 36, 8},  // P5
    {A11, A10, 20, 21}, // P6

    {12, 11, 13, NC}, // M1
    {43, 48, 46, NC}, // M2
    {47, 49, 45, NC}, // M3
    {40, 41, 44, NC}, // M4

    { 3,  2, NC, NC}, // E1
    {18, 19, NC, NC}, // E4
};

#endif
