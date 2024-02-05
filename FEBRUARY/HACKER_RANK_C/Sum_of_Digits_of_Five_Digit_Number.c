#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
	
    int n;
    int sum_digit;
    scanf("%d", &n);

    while( n != 0){
        sum_digit += (n % 10);
        n /= 10;
    }
    printf("%d",sum_digit);
    
    return 0;
}
