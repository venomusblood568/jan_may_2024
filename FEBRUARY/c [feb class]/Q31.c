#include <stdio.h>

int main(){
    int i ;
    int factorial = 1;
    int number;

    printf("ENTER A NUMBER: ");
    scanf("%d",&number);
    
    for(i = 1; i <=number; i++){
        factorial = factorial * i;
    }

    printf("Factorial of %d is: %d",number,factorial);
    return 0;
}