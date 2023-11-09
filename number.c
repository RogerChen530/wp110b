#include <stdio.h>

void decimalToBinary(int n)
{
    for (int i = 7;i >= 0;i--)
    {
        int bit = (n >> 1) & 1;
        printf("%d", bit);
    }
}

int main()
{
    int number;
    printf("請輸入一個整數介於0和255之間 : ");
    scanf("%d", &number);
    
    if (number < 0 || number > 255)
    {
        printf("超出範圍 !!\n");
        return 1;
    }
    
    printf("二進位表示為:");
    decimalToBinary(number);
    printf("\n");
    
    return 0;
}
