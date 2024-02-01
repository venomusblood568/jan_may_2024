//c program to illustrate the assigment operators
#include<stdio.h>

int main(){
    int a = 25; 
    int b = 5;

    //using operators and printing results
    printf("a = b: %d\n", a = b);
    printf("a += b: %d\n",a += b);
    printf("a -= b: %d\n", a -= b);
    printf("a /= b: %d\n", a /= b);
    printf("a %= b: %d\n", a %= b);
    printf("a &= b: %d\n", a &= b);
    printf("a |= b: %d\n", a |= b);
    printf("a >>= b: %d\n", a >> b);
    printf("a <<= b: %d\n", a << b);

    return 0;
}