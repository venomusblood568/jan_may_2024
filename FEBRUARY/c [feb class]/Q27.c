// C program to illustrate the bitwise operators

#include<stdio.h>

int main(){
    int a = 5;
    int b = 2;

    //using operators and printing results
    printf("a & b : %d\n", a & b);
    printf("a | b : %d\n",a | b);
    printf("a ^ b : %d\n",a ^ b);
    printf(" ~a : %d\n", ~a);

    printf(" a >> b : %d\n", a>>b);
    printf(" a << b : %d\n", a<<b);

    return 0;
}