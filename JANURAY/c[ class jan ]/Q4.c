//c program to demonstrate use of static variable
#include<stdio.h>

void function()
{
    int x = 20;
    static int y ;
    x = x + 10;
    y = y + 10;
    printf("\t Local: %d\n\t Static: %d\n",x,y);
}

int main()
{
    printf("First Call\n");
    function();
    printf("Second Call\n");
    function();
    printf("Third Call\n");
    function();
    return 0;
}