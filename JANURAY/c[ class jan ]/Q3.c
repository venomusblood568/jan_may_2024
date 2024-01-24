//c program to demonstate use of global variable
#include<stdio.h>

//int x = 20; => global variable
static x = 20;
void function1(){
    x = x + 10;
    printf("Function 1: %d\n",x);
}

void function2(){
    printf("Function 2: %d\n",x);
}

int main()
{
    int x = 100;
    function1();
    function2();
    printf("Function main: %d\n",x);
    return 0;
}