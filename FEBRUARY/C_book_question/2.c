#include <stdio.h>
// summing a series.
int main() {
    float x, x2, x4, x5, x6,x8 , x10, sum;
    scanf("%f", &x);
    printf("x = %f\n",x);
    x2 = x * x / 2.0;
    x4 = x*x*x*x / 24.0;
    x6 = x*x*x*x*x*x / 30.0;
    x8 = x*x*x*x*x*x*x*x  / 56.0;
    x10 = x*x*x*x*x*x*x*x*x*x / 90.0;

    sum = 1.0 - x2 + x4 - x6 + x8 - x10;

    printf("sum = %f\n",sum);
    return 0;
}
