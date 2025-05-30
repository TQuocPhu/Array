//Array: là biến đặc biệt, chứa các dữ liệu liên quan đến nhau
//Vấn đề: Cần khai báo 1 tập hợp gồm nhiều giá trị có
//liên quan với nhau.
// => Không thể khai báo từng biến một => Gom chung trong 1 biến.
// => Mảng là giải pháp hợp lý

//Cách khai báo: let/const + <tên mảng> = [<phần tử 1>, <phân tử 2>, .. <phần tử n>];
//Chỉ số mảng (index): vị trí của các phần tử (elementelement) trong mảng, bắt đầu từ 0.
//Cách truy xuất phần tử trong mảng: <tên mảng>[<index>];
//Độ dài mảng (lenght): số phần tử có trong mảng.

// let nameStudentOfC04Class = ['Khanh', 'Phu', 'Khang']; //mảng

// let numbers = [2, 6, 3, 4, 5, 8]; //tập các số nguyên

// //Cách khai báo 2: OOP (ít sử dụng)
// let scores = new Array(2,6,3);

// //Chỉ số mảng - Truy xuất phần tử trong mảng:
// let diem = [2, 6, 3]; //diem[0] = 2, diem[1] = 6, diem[2] = 3
// //index:    0  1  2
// //truy xuất:
// console.log(diem[0]);
// console.log(diem[1]);
// console.log(diem[2]);
// //index cuối là length - 1

// /* Note
// Trong JS
// Các phần tử trong 1 mảng không nhất thiết phải cùng 1 kiểu dữ liệu.
// */
// let arr = [1, false, "V", null, []];

// let foods = ['orange', 'apple', 'lemon', 'banana'];
// //Dùng for duyệt mảng:
// for(let i=0; i<foods.length; i++){
//     console.log(foods[i]);
// }

// //Dùng foreach
// foods.forEach((food) => {
//     food[1] = 'staw';
// });
// console.log(foods);

/*

Hoàn thành các bài sau:
Cho một mảng [1,7,5,9,2,6,7,9,7]
- In ra các phần tử trong mảng.
- In ra các phần tử chẵn trong mảng.
- In ra các phần tử tại vị trí chẵn trong mảng.
- Cho người dùng nhập vào 1 số và in ra số lần xuất hiện của số đó trong mảng.

*/
let numbers = [1, 7, 5, 9, 2, 6, 7, 9, 7];
// In ra cac phan tu trong mang
numbers.forEach((number) => {
    console.log(number);
});

// In ra cac phan tu chan trong mang
numbers.forEach((number) => {
    if (number % 2 == 0) {
        console.log(number); //2,6
    }
});

//In ra cac phan tu tai vi tri chan
let index = 0;
numbers.forEach((number) => {
    if (index % 2 == 0) {
        console.log(`${index}: ${number}`);
    }
    index++;
});

let count = 0;
let inputNumber = parseInt(prompt("Nhap so: "));
if (isNaN(inputNumber)) {
    alert("Vui long nhap so hop le");
}
numbers.forEach((number) => {
    if (inputNumber == number) {
        count++;
    }
});
if (count > 0) {
    console.log(`So ${inputNumber} xuat hien ${count} lan trong mang`);
} else {
    alert("So vua nhap khong co trong mang");
}

//Các hàm tương tác với mảng:
/*
push(): thêm một phần tử vào cuối mảng

pop(): xóa phần tử cuối cùng của mảng.

shift(): xóa phần tử ở đầu mảng.

unshift(): thêm phần tử vào đầu mảng.

concat(): nối nhiều mảng với nhau.

sort(): sắp xếp các phần tử của mảng.

splice(): xóa phần tử ở vị trí bất kì trong mảng đồng thời có thể thêm phần tử khác vào vị trí đó.

slice(): lấy mảng con trong mảng dựa vào vị trí bắt đầu và kết thúc.
*/

//Thêm phần tử vào mảng: 
let arrs = [1,2,3];
let arrs1 = [26,3,4];
//push
arrs.push(26);
console.log(arrs); //[1,2,3,26]
//unshift
arrs.unshift(0);
console.log(arrs); //[0,1,2,3,26]

//Xóa phần tử
//pop
arrs.pop(); //[0,1,2,3]
//shift
arrs.shift(); //[1,2,3];

//concat
let newarr = arrs.concat(arrs1);
console.log(newarr); //[1,2,3,26,3,4]

// join: tạo ra chuỗi chứa các phần tử từ mảng
let joinArray = arrs.join("-");
console.log(joinArray); // 1-2-3

//splice(vị trí bắt đầu, số phần tử từ vị trí bắt đầu đến vị trí xóa để xóa các phần tử đó (số lượng phần tử muốn xóa), phần tử thay thế)
arrs.splice(1,1,26);
console.log(arrs);