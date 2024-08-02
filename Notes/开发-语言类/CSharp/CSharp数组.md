
# C# 数组

## 数组的声明方式
``` C#
// 一维数组
int[] arr1 = new int[10];
int[] arr2 = new int[]{0,1,2,3,4,5,6,7,8,9};
int[] arr3 = {0,1,2,3,4,5,6,7,8,9};
// 二维数组
int[,] map = new int[10,11];
int[][] map2 = new int[][11];   // 必须指定子集长度
int[][] map2 = new[] {new int[11]};
```