//c program to illutrate the local scope 

#include<stdio.h>

//driver code 
int main()
{
    {
        int x = 10, y = 20;
        {
            printf("x = %d, y = %d\n",x,y);
            {
                int y = 40;
                x++;
                y++;
                printf("x = %d,y = %d\n",x,y);
            }
            printf("x = %d, y = %d\n", x, y);
        }
    }
    return 0;
}