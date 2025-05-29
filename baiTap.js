// Cho một mảng [1,7,5,9,2,6]
// - In ra các phần tử trong mảng
// - In ra các phần tử chẵn trong mảng
// - In ra các phần tử tại vị trí chẵn trong mảng
// - In ra tổng các phần tử chẵn trong mảng
// - In ra tổng các phần tử >10 trong mảng
// - In ra tổng các phần tử chia 7 dư 2 trong mảng
// - In ra max của các phần tử chẵn mảng
// - In ra lớn nhất của mảng
// - In ra số lượng các phần tử chia hết cho 5 trong mảng
// - In ra trung bình các phần tử chia hết cho 5 trong mảng
// - * Tìm phần tử lớn thứ 2 trong mảng
let arr = [1, 7, 5, 9, 2, 6];

// - In ra các phần tử trong mảng
arr.forEach((number) => {
    console.log(number);
});

// - In ra các phần tử chẵn trong mảng
arr.forEach((number) => {
    if (number % 2 == 0) {
        console.log(number);
    }
});

// - In ra các phần tử tại vị trí chẵn trong mảng
let index = 0;
arr.forEach((number) => {
    if (index % 2 == 0) {
        console.log(number);
    }
    index++;
});

// - In ra tổng các phần tử chẵn trong mảng
let sum = 0;
arr.forEach((number) => {
    if (number % 2 == 0) {
        sum += number;
    }
});
console.log(sum);

// - In ra tổng các phần tử >10 trong mảng
let tong = 0;
arr.forEach((number) => {
    if (number > 10) {
        tong += number;
    }
});
console.log(tong);

// - In ra tổng các phần tử chia 7 dư 2 trong mảng
let SUM = 0;
arr.forEach((number) => {
    if (number % 7 == 2) {
        console.log(number);
        SUM += number;
    }
});
console.log(SUM);

// - In ra max của các phần tử chẵn mảng
let max = undefined; //Max không xác định trước
for (let i = 1; i < arr.length; i++) {
    if (max == undefined) {
        if (arr[i] % 2 == 0) max = arr[i]; //lấy số chẳn đầu tiên
    }
    else {
        if (arr[i] % 2 == 0 && arr[i] > max) {
            max = arr[i];
        }
    }

}
console.log(max);

// - In ra lớn nhất của mảng
let MAX = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (MAX < arr[i]) {
        MAX = arr[i];
    }
}
console.log(MAX);

// - In ra số lượng các phần tử chia hết cho 5 trong mảng
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0) {
        count++;
    }
}
console.log(count);

// - In ra trung bình các phần tử chia hết cho 5 trong mảng
let Count = 0;
let Sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0) {
        Sum += arr[i];
        Count++;
    }
}
let avg;
if (Count == 0) avg = 0;
else
    console.log(avg);

// - * Tìm phần tử lớn thứ 2 trong mảng
// array.sort((a, b) => b - a);
// const maX = undefined;
// let lonII;
// for (let i = 0; i < array.length; i++) {
//     if(maX == undefined){
//         maX = array[i];
//     } else{
//         if (array[i] < maX) {
//             lonII = array[i];
//             break;
//         }
//     }
// }
// console.log(lonII);
// Cach 2
let array = [12, 26, -3, 0, 4, -8, 2004]
let maX = array[0];
let seconD = -Infinity;
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        seconD = maX;
        maX = array[i];
    } else if (seconD < array[i] && array[i] < maX) {
        seconD = array[i];
    }
}
if (seconD != -Infinity) {
    console.log(seconD);
}
else {
    console.log("Khong co so lon thu hai");
}


