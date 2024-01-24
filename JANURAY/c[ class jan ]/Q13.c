//C program to demonstrate use of floating types
#include<stdio.h>

int main()
{
    float a = 123349.0;
    float b = 2.5;
    float c = 2E-4f;

    printf("%f \n",a);
    printf("%.3f\n",a);

    printf("%f\n",b);
    printf("%f",c);

    return 0;
}