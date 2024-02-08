#include <stdio.h>

#define PI 3.14159

int main() {
    float radius, volume;

    // Input radius from user
    printf("Enter the radius of the sphere: ");
    scanf("%f", &radius);

    // Calculate volume
    volume = (4.0 / 3.0) * PI * radius * radius * radius;

    // Print the result
    printf("Volume of the sphere with radius %.2f is: %.2f\n", radius, volume);

    return 0;
}
