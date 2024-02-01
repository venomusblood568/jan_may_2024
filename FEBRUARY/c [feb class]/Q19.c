//C program to demonstrate explicit type casting
#include<stdio.h>

int main(){
    double x = 1.2;

    //explicit conversion from double to int
    int sum = (int)x + 1;

    printf("Sum = %d",sum);
    
    return 0;

}

