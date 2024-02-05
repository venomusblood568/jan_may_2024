#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>



int main() 
{
    int a, b;
    scanf("%d\n%d", &a, &b);
  	
    char* num[]={"","one","two","three","four","five","six","seven","eight","nine"};
    
    for (int n=a; n<=b; n++){
        if(n < 10) printf("%s \n",num[n]);
        if(n > 9 && n % 2 == 0) printf("even\n");
        if(n > 9 && n % 2 != 0) printf("odd\n");
    }
    
    

    return 0;
}

