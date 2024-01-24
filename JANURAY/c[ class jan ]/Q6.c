//c program to illustrate constant variable definition
#include<stdio.h>

int main()
{
    const int int_const = 25;

    const char char_const = 'A';

    const float float_const = 15.66;

    printf("Printing value of integer constant: %d\n",int_const);

    printf("Printing value of Character constant:%c\n",char_const);

    printf("Printing value of Float Constant: %0.3f\n",float_const);

    return 0;
}