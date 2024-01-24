//c program to demonstrate use of automatic variable
#include<stdio.h>

int z;
void function()
{
    int x = 10;
    auto int y = 20;
    printf("Auto variable: %d\n",y);
}

int main(){
    function();
    printf("The default value of z is %d\n",z);
    return 0;
}