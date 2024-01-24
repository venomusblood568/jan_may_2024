//c program to declare and print local variable inside a
#include <stdio.h>

int  function(){
    //local variable
    int x = 110;
    printf("%d\n",x);
}

int main()
{
   int result = function();
    printf("%d",result);
    return 0;
}