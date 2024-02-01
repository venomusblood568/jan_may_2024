// write a c program for Ternary operator in C

#include<stdio.h>

int main(){
    int x = 15;
    int y = 12;
    int results = (x > y) ? x : y;
    printf("The larger value is: %d\n",results);

    return 0;
}