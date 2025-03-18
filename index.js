//1) 1-den 100-e qeder butun tek ededleri console-da chap eden bir for dongusu yazin.
// for (let i = 0 ; i < 100; i +=2) {
//     console.log(i);
// }

//2) verilmish massivdeki butun ededlerin cemini tapan bir while dovru yazin.
// let array = [1, 2, 3, 4, 5, 10];
// let sum = 0, i = 0
// while (i < array.length) {
//     sum += array[i];
//     i++
// }
// console.log("Cem:", sum);

//3) istifadeciden reqem alib, eded 0 olana qeder onu console-da chap eden do...while dovru yazin.
// let number;
// do {
//     number = parseInt(prompt("Bir reqem daxil et:"));
//     console.log(number);
// } while (number !== 0);

//4) sonsuz while dovru yaz ve break istifade ederek o dovrden chix.
// let count = 0;
// while (true) {
//     console.log("D[vr ishleyi:" + count);
//     count++ ;
//     if (count === 12) {
//         break;
//     }
// }

//5) 1-den 50-ye qeder butun cut ededleri chap etdirin.
// for (let i = 0; i < 50; i+=2) {
//     console.log(i);
// }

//6) arraydeki butun elementlerini indexleri ile birlikde chap et.
// let array = ["alma", "armud", "ciyelek", "mandalina"]
// for (let i = 0; i < array.length; i++) {
//     console.log(i + ":" + array[i]);
// }

//7) 5 faktorialini hesablayan bir for dongusu yazin.
// let faktorial = 1;
// for (let i = 8; i > 0; i--) {
//     faktorial *= i;
// }
// console.log("5! =", faktorial);


//8) verilmish bir sozun her herfini ayri-ayri chap eden bir for dobru yazin.
// let soz = "JavaScript"
// for (let i = 0; i < soz.length; i++) {
//     console.log(i + " " + soz[i]);
// }

//9) 1-den 10-a qeder ededleri while dovru ile console-a yazdirin.
// let i = 1
// while (i<=10) {
//     console.log(i);
//     i++;
// }

//10) istifadeci "stop" sozunu yazana qeder girish alan bir proqram yazin.
// let stopInp;
// while (stopInp !== "stop") {
//     stopInp = prompt("Bir soz daxil et (dayandirmaq ucun stop):")
//     console.log('Daxil etdiyinix soz:', stopInp);
// }

//11) 100-e eder 3-e bolunen ededleri tapin (kod ile).
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

//12) 1-den 100-e qeder 7-ye bolunen amma 5-e bolunmeyen ededleri cap eden bir for dovru yazin.
// for (let i = 0; i <= 100; i++) {
//     if (i % 7 === 0 & i % 5 !==0) {
//         console.log(i);
//     }
// }