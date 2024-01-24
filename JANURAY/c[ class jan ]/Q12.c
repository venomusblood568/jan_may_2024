// C program to print integer data types
#include<stdio.h>

int main()
{
    int a = 9;
    int b = -9;
    int c = 89U;
    long int d = 99998L;

    //for normal case we can use this %d
    printf("Integer value with positive data: %d\n",a);

    //for negative case we can use
    printf("Integer value with negative data: %d\n",b);

    //for unsigned data
    printf("Integer value with an unsigned int data: %u\n",c);

    //long int
    printf("Integer value with an long int data: %ld\n",d);

    return 0;
}