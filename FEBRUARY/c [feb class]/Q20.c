//c program to demonstrate Implicit type conversion type conversion of numeric types
#include<stdbool.h>
#include<stdio.h>

int main(void){
    
    //local Declarations
    bool b = true;
    char c ='X';
    float d = 1234.5;
    int i = 123;
    short s = 98;

    //statements
    printf("bool + char is char: %c\n",b+c);
    printf("int * short in int: %d\n",i*s);
    printf("float * char is float: %f\n",d*c);
    return 0;
}