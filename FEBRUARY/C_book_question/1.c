#include <stdio.h>

int main() {
    int a , b , area, perimeter;
    a = 3;
    b = 8;
    area = a * b;
    perimeter = 2 * (a + b);
    printf("%d \n", area);
    printf("%d \n", perimeter);
    return 0;
}

/*
//user input
#include <stdio.h>

int main() {
    int a , b , area, perimeter;
    scanf("%d %d", &a,&b);
    area = a * b;
    perimeter = 2 * (a + b);
    printf("%d \n", area);
    printf("%d \n", perimeter);
    return 0;
}
*/
