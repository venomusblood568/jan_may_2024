//c code to illustrate External Linkage
#include<stdio.h>

int x = 10;
int z = 5;

int main()
{
    printf("%d%d%d\n",x,y,z);
    
}

int y = 2;

//OUTPUT => error: use of undeclared identifier 'y'