int main() {

int n;
int a, b , c, d, e;
scanf("%d", &n);
if (n < 10000 || n > 99999) 
{
    printf("It's not a five-digit number.\n");

} 
else 
{
    a = n % 10;
    b = (n / 10) % 10;
    c = (n / 100) % 10;
    d = (n / 1000) % 10;
    e = (n / 10000) % 10;

    int sum = a + b + c + d + e;
    printf("%d\n", sum);
}
return 0;
}
