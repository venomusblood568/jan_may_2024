#include <stdio.h>
// sum of five number 
int main() {
    int d1, d2,d3,d4,d5,sum,number;
    printf("ENter a 5 digit number: ");
    scanf("%d",&number);
    d1 = number %10;
    d2 = number % 10;
    d3 = number % 10;
    d4 = number % 10;
    d5 = number %10;
    sum = d1 + d2 + d3 + d4 + d5;
    printf("sum of digits: %d",sum);
    

    return 0;
}
