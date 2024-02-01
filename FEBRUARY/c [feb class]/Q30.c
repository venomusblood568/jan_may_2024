#include<stdio.h>

int main(){
    int x = 15;
    int y = 12;

    printf("The value is: %d,%d\n",x,y);
    printf("The value is: %d\n", x+++y);

    printf("The value is: %d,%d\n",x,y);
    printf("the value is: %d\n", x+ ++y);
    
    printf("The value is: %d,%d\n",x,y);

    return 0;

}