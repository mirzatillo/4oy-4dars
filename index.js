// 1-masala
// Raqamlarning yig'indisini hisoblash:
// let sum =0
// for( let i =10; i <= 100; i++){
//    i % 2 ==1
//    sum=sum+i
// }

// console.log(sum);

// 2 masala
// Faktorialni topish:
// const num = 10;
// let count = 0;
// let arr =[];

// for(let i=1; i<=num; i++){
//   count=0
//   for(let k =1; k<=i; k++){
//     if(i % k ==0){
//       count++
//     }
//     if(count > 2){
//       arr.push(i)
//       break
//     }
//   }
// }

// console.log(arr);


// 3-masala
// Murakkab sonlarni aniqlash:

// for (let i = 1; i <= 50; i++) {
//     let isComposite = false;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isComposite = true;
//             break;
//         }
//     }
//     if (isComposite) {
//         console.log(i);
//     }
// }


// 4-masala
// Kvadratlarning yig'indisi:
// let sum;
// for( let i = 1 ; i<=20 ; i++){
//  sum = sum * i
//  console.log(i**2);
// }


// 5-masala
// Eng katta va eng kichik raqamlarni topish:
// 5 ta sonni foydalanuvchidan qabul qilish
// let numbers = {};
// for (let i = 0; i < 5; i++) {
//   let input = parseFloat(prompt(Iltimos, ${i + 1}-sonni kiriting:));
// }
// let max = numbers[0];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log("Eng katta son: " + max);
// console.log("Eng kichik son: " + min);


// 6-masala
// Murakkab sonlarni chiqarish:
//    let res=""
// for (let i = 2; i <= 30; i++) {
//     let  res= ture
//     for (let i = 2; i <= Math.sqrt(i); j++) {
//       if (i % i === 0) {
//         let  res= false;
//         break;
//       }
//     }
//     if (let) {
//       console.log(i);
//     }
//   }

//  7 masala
// Sonni orqaga o'girish
//  let  a= +prompt('sonni kriting')
  


// Break/continue ga oid masalalar.

// 1 masala
// Break operatori bilan siklni to'xtatish:
// let sum;
// for(let i=1; i<=10; i++){
//    let num= +prompt('sonni kriting')
//    if (num == 5) {
//       break
//    }
//    sum += num
//  }

//  console.log(sum);


// 2 masala
// Continue operatori bilan siklni o'tkazib yuborish:

// for(let i=1; i<=10; i++){
//    if (i==3 && i==7) {
//        continue
//    }
//    console.log(i);
// }


// 3 masala
// Break operatori bilan qidirishni to'xtatish:
// let a= +prompt('sonni kriting')

// let res=''

//    if (a==7) {
//    res="Topildi!"
// }

// console.log(res);

// 4 masala
// Continue operatori bilan juft sonlarni o'tkazib yuborish:

// for(let i=1; i<=10; i++){
//   if (i % 2 =0) {
//      continue
//   }
// }
// console.log(i);

// 5 masala
// Break operatori bilan katta sonlarni aniqlash:

// for(let i=1; i<=100; i++){
//   if (i>=50) {
//     break
//   }
// }

// console.log(i);

// / 7-masala
// let raqam = prompt("Raqam kiriting:");
// let teskari= '';
// for (let i = raqam.length - 1; i >= 0; i--) {
//     teskari += raqam[i];
// }
// console.log(teskari);

// 9-masala
// for(let i = 1; i<=50; i ++){
// if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
// }
// }

// 10-masala
// let sum = 0;
// let count = 0;
// for (let i = 1; i<=100; i++){
// sum+=i;
// count++
// }
// let res = sum/count;
// console.log(res);

// 11-masala
// let a = prompt('son');
// let length = a.length;
// console.log(length);

// 12-masala
// let a = +prompt('son');
// let manfiy = 0;
// manfiy = manfiy - a;
// console.log(manfiy); 

// 14-masala
// let res=0;
// for(let i = 0; i<=200; i+=2){
// res=res+i
// }
// console.log(res);

// 15-masala
// let res=0;
// for(let i = 0; i<=20; i++){
// let sum = i+(i+1);
// res+=sum;
// }
// console.log(res);



// 1 masala
// for(let i = -1; i <= 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// 2 masala

// for(let i = -1; i <= 10; i++){
//     if(i == 3 || i == 7){
//         continue;
//     }
//     console.log(i);
// }

// 3 masala

// let res = "";
// for(let i = 1; i <= 1; i++){
//     let a = +prompt("a");
//     if(a == 7){
//         break;
//         res = "topildi";
//     } else {
//         res = "topilmadi";
//     }
//     console.log(res);
// }

// 4 masala

// for(let i = -1; i <= 10; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i);
// }

// 5 masala

// for(let i = -1; i <= 100; i++){
//     if(i > 50){
//         break;
//     }
//     console.log(i);
// }