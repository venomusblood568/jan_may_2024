//C program to implement the sprintf() function

#include<stdio.h>

int main(){
    char str[50];
    int a = 2, b = 9,c,d;

    sprintf(str,"%d and %d are even number \n",a,b);
    printf("%s",str);
    
    
    return 0;
}