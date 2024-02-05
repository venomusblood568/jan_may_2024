#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

// Complete the following function.
void calculate_the_maximum(int n, int k) {
    int and_max = 0;
    int or_max = 0;
    int xor_max = 0;

    for (int i = 1; i <= n; i++) {
        for (int j = i + 1; j <= n; j++) {
            if ((j & i) > and_max && (j & i) < k) {
                and_max = j & i;
            }
            if ((j | i) > or_max && (j | i) < k) {
                or_max = j | i;
            }
            if ((j ^ i) > xor_max && (j ^ i) < k) {
                xor_max = j ^ i;
            }
        }
    }
    printf("%d\n%d\n%d\n", and_max, or_max, xor_max);
}

int main() {
    int n, k;

    scanf("%d %d\n", &n, &k);
    calculate_the_maximum(n, k);

    return 0;
}
