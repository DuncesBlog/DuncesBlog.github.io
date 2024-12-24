
# 前、后置补位
    该文创建于 2024/12/22


### 前置补位
``` Javascript
var padZero = function(num, length){
    // 0 可以更换为其他的字符,例如 String(num).padStart(length, 'x');
    return String(num).padStart(length, 0);
}
console.log(padZero(123, 5));       // 输出 00123
console.log(padZero(12345, 5));     // 输出 12345
console.log(padZero(123456, 5));    // 输出 123456
console.log(padZero(1, 5));         // 输出 00001
```


### 后置补位
``` Javascript
var endZero = function(num, length){
    return String(num).padEnd(length, 0);
}
console.log(endZero(123, 5));       // 输出 12300
console.log(endZero(12345, 5));     // 输出 12345
console.log(endZero(123456, 5));    // 输出 123456
console.log(endZero(1, 5));         // 输出 10000
```