#include <stdio.h>

int max_of_four(int a , int b, int c, int d){
    int highest;
    
    if (a > b && a > c && a > d) highest = a;
    else if (b > a && b > c && b > d) highest = b;
    else if (c > a && c > b && c > d) highest = c;
    else highest  = d;
    
    return highest;
}

int main() {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}
