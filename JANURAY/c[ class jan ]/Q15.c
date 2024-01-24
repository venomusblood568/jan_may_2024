//Demonstrate different literals in c

#include<stdio.h>

int main()
{
    int integerLiteral = 42; //integer literal
    float floatLiteral = 3.14; //floating-point literal
    char charLiteral = 'A'; //character literal
    double doubleLiteral = 2.71828; //double precision floating-point literal

    const char* stringLiteral = "Hello"; //string literal
    const int octal = 076;
    const int hex = 0x2B;

    // Printing an integer literal
    printf("Integer Literal: %d\n", integerLiteral);

    // Printing a float literal
    printf("Float Literal: %f\n", floatLiteral);

    // Printing a character literal
    printf("Character Literal: %c\n", charLiteral);

    // Printing a double literal
    printf("Double Literal: %lf\n", doubleLiteral);

    // Printing a string literal
    printf("String Literal: %s\n", stringLiteral);

    // Printing an octal value
    printf("Octal value: %o\n", octal);

    // Printing a hexadecimal value
    printf("Hexadecimal value: %X\n", hex);

    return 0;
    
}