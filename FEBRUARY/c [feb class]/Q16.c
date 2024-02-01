//Demonstrate the various escape sequence
#include<stdio.h>

int main(){
    printf("Hello world \n");printf("Hello \b\b world\n");
    printf("I Am \b\b\b\b Unstoppable \n");
    printf("Hello \f\f world \n");
    printf("Hello \r world \n");
    printf("hello \t\b\b\bworld \n");
    printf("Hello\v\vworld \n");
    printf("Hello \\world\\ \n");
    printf("\'hello world\'\n");
    printf("how are you\?\n");
    return 0;
}