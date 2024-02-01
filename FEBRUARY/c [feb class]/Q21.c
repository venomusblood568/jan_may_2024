// C program to show input and output

#include<stdio.h>

int main(){
    //declare the variable
    int num;
    char ch;
    float f;

    //integer
    printf("Enter the integer: ");
    scanf("%d",&num);
    printf("\nEntered integer is:%d",num);

    //float
    printf("\n\nEnter the float: ");
    scanf("%f",&f);

    //output the float
    printf("\n Entered float is: %f",f);

    while((getchar()) != '\n');

    //character
    printf("\n\nEnter the character: ");
    scanf("%c",&ch);

    //output the character
    printf("\n Entered charcater is: %c\n",ch);

    return 0;

}