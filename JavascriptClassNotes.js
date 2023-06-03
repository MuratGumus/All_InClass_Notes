//TODO JAVASCRİPT CLASS NOTES

//?  ===============        1. DERS     =========================
//?
//? =============================================================

//* Javascript Kodu */
// console.log("Localde bulunan script calisti")

// alert("Bu bir alert dir") /* Alert uygulmayı bloklar (Blocking Code)*/

// karar = confirm("Emin msiniz E/H")
// console.log(karar)

// console.warn("Bu bir uyarıdir")

// console.error("Eyvah hata olustu..")

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

//? ===================  CONST  ======================

console.log("APP JS RUNNING")

const pi = 3.14
console.log(pi)
console.log(typeof pi)

const sayi1 = "3"
console.log(typeof sayi1)

//! caught SyntaxError: Missing initializer in const declaration (at app.js:27:7)
// const deneme; //? const ile tanimlanan degiskene baslangic degeri verilmelidir.
// console.log(deneme)

//! Uncaught TypeError: Assignment to constant variable.
// const number1 = 5
// number1 = 7 //? const ile tanimlanan degiskene sonradan atama yapilamaz

const varMi = true
const isOpen = false
console.log(isOpen, typeof isOpen)

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let language = "Java"
console.log(language, typeof language)

language = "Javascript"
console.log(language)

language = true //? atama
console.log(language)

language = 3.14
console.log(language)

let adet //? Js bir degiskenin türünü atanan degere gore belirler. Eger atama olmadıysa türu undefined olarak belirlenmiş olur.
console.log(adet) //?undefined

adet = "23" //? atama
console.log(typeof adet)

{
  //? Bir blok icerisinde degisken olustruduk
  let localDegisken = 5
  localDegisken = localDegisken + 1
  console.log(localDegisken)
}

//! Uncaught ReferenceError: localDegisken is not defined
console.log(localDegisken)


//?  ===============        2. DERS     =========================
//?
//? =============================================================
console.log("Js dosyası bağlandı.")
//?         🔥🔥🔥       Operators           🔥🔥🔥

//! Atama Operatörü, Aritmetiksel Operatörler,Artırma ve Azaltma Operatörü, Karşılaştırma Operatörleri ve Logical(Mantıksal) Operatörler

var deneme = 5
varDeneme = 6

let myVar = 5

const myVar1 = 6

//+ Aritmetiksel Operatörler

// +,-,*,/,%
//! + operatörü
// const num1 = 10;
// const num2 = 69;

// const toplam = num1 + num2; // num1 ve num2 operand , + operator olark adlandırılıyor.

// console.log(toplam);

// const msg1 = "Hello";
// const msg2 = "World!";

// const mesaj = msg1 + msg2;
// console.log(mesaj);

// const firstName = "Koray";
// const lastName = "Koksal";
// console.log(firstName, lastName); // consoleda virgül ile değişkenleri yazdırırken virgül boşluk karakateri gibi davranır.
// const fullName = firstName + " " + lastName; //? + operatörü String Concatenation işlemini de yapar.
// console.log(fullName);

// //! Template Literals (Es6 ile gelen bir özellik)
// // `merhaba``${değişken} ${değişken2}`;
// // `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.

// const fullName2 = `${firstName} ${lastName}`;
// console.log(fullName2);

const num3 = "6"
const num4 = "7"
console.log(num3 + num4) // 67
console.log(num3 + 7) // 67. js otomatik tip dönüşümü yaparak buradaki ifadeyi de concatenat etti.
// console.log(7 + num3); // + operatorunde string değişken üstün gelir ve dönmüşümü stringe yapar. 76 çıktısını verdi.
console.log(typeof (7 + num3)) // string

//! - operatörü

// const x = 55;
// const y = 44;

// console.log(x - y); // 11

// const myNum = "1";
// console.log(x - myNum); // 54. - operatöründe string değişkeni numbera çevirir.
// const yourNum = "one";
// console.log(x - yourNum); // NaN (Not a Number)
// //? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder.
// console.log(x - "a"); // NaN

//! * operatörü

// let carp1 = 7;
// let carp2 = 9;
// console.log(carp1 * carp2); // 63

// console.log("a" * "b"); // NaN
// console.log("a" * 3); // NaN

// console.log("5" * "9"); // 45. karakterler numeric ise numebr gibi davranarak işlemi gerçekleştiriyor.
// console.log(typeof ("5" * "9")); // number

//! / operatörü

// const böl1 = 81;
// const böl2 = 9;

// console.log(böl1 / böl2); // 9

// console.log(böl1 / "9"); // 9
// console.log(böl1 / "dokuz"); // NaN

// console.log(böl2 / 0); // Infinity
// console.log(-61 / 0); // -Infinity
// //? JavaScript ile sonsuzluk-sınır değerini ifade etmek için Infinity veya -Infinity anahtar kelimesi kullanılır. Bir sayının 0'a bölünmesi Infinity veya –Infinity değeri döndürür.

// console.log(0 / 5); // 0
// console.log(0 / -5); // -0

// console.log(57 / 9); // 6.33333333333

//! % (Mod Alma) operatörü (Bölmedeki kalan sayıyı bulur)

// const mod1 = 57;
// const mod2 = 9;

// console.log(mod1 % mod2); // 3. / operatörü gibi davranıyor ama bize kalan değeri dönüyor.
// console.log(22 % 7); // 1

// const benimSayim = 967;

// // const birlerBas = benimSayim / 100;
// const birlerBas = benimSayim % 10; // 7
// console.log(birlerBas);
// // const onlarBas = benimSayim % 100;
// const onlarBas = (benimSayim % 100) / 10; // 6.7
// console.log(onlarBas);
// const yüzlerBas = benimSayim / 100; // 9.67
// console.log(yüzlerBas);

//?Bazi hazır fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tam sayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam sayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.
// toFixed(basamakSayısı): // . dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı içine verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.

// console.log(
//   `YüzlerBas: ${Math.trunc(yüzlerBas)}, OnlarBas: ${Math.trunc(
//     onlarBas
//   )}, birlerbas : ${birlerBas}`
// ); //YüzlerBas: 9, OnlarBas: 6, birlerbas : 7

// const hazirSayi = 56.788888;

// console.log(`hazirSayi of Circle: ${hazirSayi.toFixed(3)} `); // 56.789
// console.log(`hazirSayi of Circle: ${Math.floor(hazirSayi)} `);
// console.log(`hazirSayi of Circle: ${Math.ceil(hazirSayi)} `);
// console.log(`hazirSayi of Circle: ${Math.trunc(hazirSayi)} `);
// console.log(`hazirSayi of Circle: ${Math.round(hazirSayi)} `);

// const randomNum = Math.random();
// console.log(randomNum);

// const randomNum2 = Math.random() * 10;
// console.log(randomNum2);
// console.log(Math.round(Math.random() * 10));

//! ** (üs alma) operatörü

// const üs1 = 2
// const üs2 = 3
// console.log(üs1 ** üs2)

// // Dairenin alanı, pi çarpı yarıçapın karesidir (A = π r²).

// const pi = 3.14
// const yariCap = 9

// const alan = pi * yariCap ** 2
// console.log(alan)

// //! 🔥🔥🔥              Artırma ve Eksiltme Operatörleri

// //? ++ ve -- operatörleri 1 artırır veya 1 eksiltir

// // sonrası artırma ve eksiltme
// // let number1 = 6;
// // //  let artirNew = number1 // 6
// // //  number1= number1 +1// 7
// // let number1New = number1++; // önce atadı sonrasında number1 değişkenini 1 artırdı
// // console.log(number1New); // 6
// // console.log(number1); // 7
// // console.log(number1New); // 6

// // let newSayi = ++number1; // önce artır sonra ata
// // console.log(newSayi); //8
// // console.log(--newSayi); // 7
// // console.log(newSayi--); // 7

// //! 🔥🔥🔥              Atama Operatörleri

// let nums1 = 14
// let nums2 = 17
// //! += Ekle ve Sonucu Ata
// // nums2 = nums2 + nums1;
// //? yukarıdaki gibi uzun uzun yazmak yerine += operatörünü kullanarak işlemimi kısaltmış oldum. Aynı şekilde diğer operatörler içinde geçerli.
// // nums2 += nums1;
// // console.log(nums2); // 31

// let num14 = 6
// let num15 = 3

// //! -= Çıkar ve Sonucu Ata
// // num14 = num14 - num15;
// // num14 -= num15;
// // console.log(num14); // 3

// //! *= Çarp ve Sonucu Ata
// // num14 = num14 * num15;
// num14 *= num15
// console.log(num14) //18
// //! /= Böl ve Sonucu Ata
// // num14 = num14 / num15;
// // num14 /= num15;
// // console.log(num14);
// //! /= Bölümden Kalanı Bul ve Ata
// // num14 = num14 % num15;
// // num14 %= num15;
// // console.log(num14);

// //! **= Üs Al ve Sonucu Ata
// // num14 = num14 ** num15;
// // num14 **= num15;
// // console.log(num14);

// //! 🔥🔥🔥              Karşılaştırma Operatörleri

// const num16 = 27

// // console.log(num16 == 27); //true
// // console.log(num16 == "27"); // true
// //? == (eşitlik operatörü), iki değeri karşılaştırırken tip dönüşümü yapar. Eğer karşılaştırılan değerler farklı tiplerde ise, JavaScript otomatik olarak bu değerleri aynı tipe dönüştürerek karşılaştırma yapar. Bu işlem sırasında, değerler eşitlenebilir bir forma getirilir ve ardından karşılaştırılır.

// // console.log(num16 === 27); // true
// // console.log(num16 === "27"); // false
// // //? === operatörü otomatik tip dönüşümü yapmadığından dolayı, farklı tiplerdeki değerleri eşit olarak kabul etmez.tip ve değer aynı mı diye sorgular.

// // // const user1 = prompt("Lütfen bir sayı griniz: ");
// // // const user2 = prompt("Lütfen bir sayı griniz: ");
// // // console.log(user1);
// // // console.log(user2);
// // // const isSame = user1 == user2;
// // // console.log(isSame);

// // console.log(true == 1); //true
// // console.log(null == undefined); // true
// // // true boolean değeri 1 sayısı ile eşit kabul edilir, null ve undefined ise birbirine eşit kabul edilir.
// // console.log(true === 1); // false
// // console.log(null === undefined); // false

// //? !=, !==

// // console.log(15 != "15"); // false. çünkü değerleri eşit
// // console.log(15 !== "15"); // true. çünkü typeları eşit değil

// // //? >, < (Büyük mü?, Küçük mü?)
// // console.log(15 > 5); // true
// // console.log(15 < 5); // false

// // console.log("15" > 5); // true

// // console.log("a" > "b"); // false.String ifadelerde ASCII'ye gore kiyaslama yapilir.
// // console.log("a".charCodeAt()); // 97
// // console.log("b".charCodeAt()); // 98
// // //. .charCodeAt() metodu string karakterin ASCII karşılığını verir.
// // console.log("a" > "A");// true

// //? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

// // console.log(15 >= 15); //true
// // console.log(15 <= 15); // true
// // console.log(15 >= 16); // false
// // // console.log(15 >== "15");// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
// // console.log(15 >= "15"); // true
// // console.log("14" <= "15"); // true

// //! 🔥🔥🔥              Mantıksal Operatörler

// // && and
// console.log(true && true) // true
// console.log(" " && true) // true

// console.log(5 && "Merhaba") // "Merhaba"
// console.log(0 && "Dünya") // 0
// // && operatoru ilk gördüğü falsy veya false değerini döner.
// console.log(5 && 0) // 0
// console.log(true && false) // false

// //! || or
// console.log(true || false) //true
// console.log(5 || 15) // 5
// console.log(5 || 0) // 5
// console.log("" || "Merhaba") // "Merhaba"
// console.log("" || 0) // 0
// // || operatoru true ve truthy değer arar. ilk gördüğü true veya truthy döner.Bulamazsa son gördüğü false veya falsy değeri döner.

// // ! not
// console.log(!true) // false
// console.log(!false) // true
// console.log(!0) // true
// console.log(!5) // false

// // falsy
// console.log(Boolean(false)) // false
// console.log(Boolean(0)) // false
// console.log(Boolean(-0)) // false
// console.log(Boolean(0n)) // false
// console.log(Boolean("")) // false (boş string)
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false

// // truthy
// console.log(Boolean(true)) // true
// console.log(Boolean({})) // true (boş object)
// console.log(Boolean([])) // true (boş array)
// console.log(Boolean(5)) // true
// console.log(Boolean("0")) // true (dolu string)
// console.log(Boolean("false")) // true (dolu string)
// console.log(Boolean(Infinity)) // true
// console.log(Boolean(new Date())) // true (tarih methodları)
// console.log(Boolean(function () {})) // true (boş fonksiyon)
// console.log(
//   Boolean(function () {
//     console.log("Hello World!")
//   })
// ) // true (boş fonksiyon)

// //! İşlem Önceliği sıralaması
// // 1. ! (not)
// // 2. && (and)
// // 3. || (or)
// const karşilaştırma = ("merhaba" && "dünya") || false || (28 && 67 && !0)
// console.log(karşilaştırma) // dünya

// //* kullanıcıdan vize ve final notunu prompt olarak alın. sabit bir canEgrisi(ortalama) belirleyiniz.
// //!Kullanıcının vize ve final ortalaması canEgrisine eşit veya büyükse Kullanıcıya "Geçtiniz" mesajı dönünüz. Eşit veya büyük değilse "Kaldınız" şeklinde mesaj dönününüz.
// //! Not: prompt tan gelen veriler string olarak geliyor o nedenle dönüştürme işlemi yapıyoruz.
// let vize = Number(prompt("Lütfen vize notunuzu giriniz ?"))
// let final = Number(prompt("Lütfen final notunuzu giriniz ?"))
// let canEgrisi = 65
// let sonuc =
//   (Math.round((vize + final) / 2) >= canEgrisi && "Geçtiniz!") || "Kaldınız!"
// console.log(sonuc)

// * =============================================
// *            TIP DONUSUMLERI
// * =============================================

// let sayi = +prompt("Bir sayi girinz:") //? 100
// console.log(typeof sayi)
// let sayi2 = 10
// sayi = sayi + sayi2 //? concatination

// console.log(++sayi)

console.log(Number("123")) //? 123
console.log(Number("12.3")) //? 12.3
console.log(Number("0")) //? 0
console.log(Number(" ")) //? 0
console.log(Number("")) //? 0
console.log(Number(null)) //? 0
console.log(Number(undefined)) //? NaN

const myNumber = "threezeroone" //? string
let myNumber2 = Number(myNumber)
console.log(myNumber2) //? NaN
console.log(typeof myNumber2) //? number

const dolar = "1000.3"
const tl = "2000.2"

const totalMoney = Number(dolar) + +tl
console.log(totalMoney)

//* ALternatif olarak parseInt() ve parseFloat() da kullanilabilir.
const dolarInt = parseInt(dolar) //? tamsayiya cevirir
console.log(dolarInt)
const tlFloat = parseFloat(tl) //? virgüllü sayiya çevirir
console.log(tlFloat)

console.log(parseFloat(null)) //? NaN
console.log(parseFloat("")) //? NaN
console.log(parseFloat(undefined)) //? NaN

//? String
const myNumber3 = 2000.5
console.log(String(myNumber3))


//?  ===============        3. DERS     =========================
//?
//? =============================================================


// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******")

// const calismaSuresi = prompt("Calisma süresi:")
// let maas = prompt("Maasini giriniz:")

//? 2 kosullu
// if (calismaSuresi >= 10) {
//   // maas = Math.trunc(maas * 1.1)
//   maas = Math.round(maas * 1.1)
//   console.log("Zamli maasiniz:", maas)
//   console.log(`Zamli maasiniz: ${maas}`)
// } else {
//   console.log("Uzgunuz maasinaza zam yapamayirouz", maas)
// }
// console.log("Güle güle")

//? Tek kosullu
// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1)
//   console.log(`Zamli maasiniz: ${maas}`)
// }
// console.log("Güle güle")

// //? Cok kosullu
// const grade = prompt("Please enter your grade:")

// let result = null
// // let result = ""
// if (grade < 0) {
//   console.log("Grade can not be smaller than zero")
// } else if (grade < 40) {
//   result = "FF"
// } else if (grade <= 50) {
//   result = "DD"
// } else if (grade <= 65) {
//   result = "CC"
// } else if (grade <= 89) {
//   result = "BB"
// } else if (grade <= 100) {
//   result = "AA"
// } else {
//   console.log("Grade can not be bigger than 100")
// }

// if (result != null) {
//   console.log(`Your score:${result}`)
// }
// //? Kısa yol
// if (result) {
//   console.log(`Your score:${result}`)
// }

// //? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
// //? yazdiriniz.

// const n1 = +prompt("Num1:")
// const n2 = +prompt("Num2:")
// const n3 = +prompt("Num3:")

// //* 1.YONTEM
// //? nested if
// // if (n1 > n2) {
// //   if (n1 > n3) {
// //     console.log("Biggest:", n1)
// //   }
// // }

// //? kosullarin logical operatorler yardimiyla birleştirilmesi
// if (n1 >= n2 && n1 >= n3) {
//   console.log("Biggest:", n1)
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log("Biggest:", n2)
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log("Biggest:", n3)
// }

// //* 2.YONTEM
// let biggest = n1

// if (n2 >= biggest) {
//   biggest = n2
// }
// if (n3 >= biggest) {
//   biggest = n3
// }
// console.log(`${biggest} is biggest`)

//**************** TERNARY *******************

// const grade1 = prompt("Please enter your grade:")

// grade1 >= 50 ? console.log("SUCCEED") : console.log("FAILED")
// const score = grade1 >= 50 ? "PASSED" : "FAILED"
// console.log(score)

// //? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanilmak zorundadir.
// const score1 = grade1 >= 50 ? "SUCCEED" : ""
// console.log(score1)

// //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, 2 durum var ise
// //? Ternary kullanmak daha mantiklidir
// const speed = 110

// speed > 120
//   ? console.log("Speedy")
//   : speed >= 90
//   ? console.log("Normal")
//   : console.log("Low Speed")

// //? ayni örneğin if-else ile yapilmasi
// if (speed > 120) {
//   console.log("Speedy")
// } else if (speed >= 90) {
//   console.log("Normal")
// } else {
//   console.log("Low Speed")
// }

//**************** SHORT-CIRCUIT *******************

const age = 18

let description = ""
//? if-else
// if (age >= 18) {
//   description = "Adult"
// }

//? Ternary
// description = age >= 18 ? "Adult" : ""

//? Short-Circuit (Tek bir durum var ise short-circuit yontemi daha kisa oluyor)
//* age 18'e eşit veya daha büyükse (true) description'a Adult aktar aksi takdirde hiç bir şey yapma
age >= 18 && (description = "Adult")

//* age 18'e eşit veya daha büyük değilse (false) description'a Adult aktar aksi takdirde hiç bir şey yapma
age < 18 || (description = "Adult")

console.log(description)

//! ODEV1: Dort Islem Hesap Makinasi

//**************** SWITCH-CASE *******************


//?  ===============        4. DERS     =========================
//?
//? =============================================================
// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

// //? 100 adet cikti veren kodu yaziniz.

for (let i = 1; i <= 100; i++) {
  console.log(`${i}-FS14`)
}

for (let i = 1; i <= 100; i *= 2) {
  console.log(`${i}-FS14`)
}
1 - FS14
2 - FS14
4 - FS14
8 - FS14
16 - FS14
32 - FS14
64 - FS14

// //? 1 den n kadar sayilari toplayan kodu yaziniz.

const n = prompt("Enter your number")
let sum = 0 //* Global degisken

for (let i = 1; i <= n; i++) {
  //! i lokal degiskendir
  //   sum = sum + i
  sum += i //* kisa hali
  console.log(sum)
}
// console.log(i)  //! Error
console.log(`SUM: ${sum}`)

//? 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..
//? Math.random() => 0 - 1 arasinda rasgele bir sayi üretir.

const adet = prompt("kac adet sayi uretmek istersiniz:?")

for (let sayac = 1; sayac <= adet; sayac++) {
  const rasgeleSayi = Math.round(Math.random() * 100)
  //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.
  console.log(`${sayac}. sayiniz : ${rasgeleSayi}`)
}
//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.


// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")

let i = 1
while (i <= 10) {
  console.log(i)
  i++
}
console.log("BYE")

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

if (not1 < 0 || not1 > 100) {
  console.log("Not 0'dan küçük veya 100'den büyük olamaz")
}

//! --------- WHILE -----------
let not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:")

while (not1 < 0 || not1 > 100) {
  console.log("Not 0'dan küçük veya 100'den büyük olamaz")
  not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
}
console.log("Notunuz:", not1)

//! ------  DO - WHILE -------
let not2
do {
  not2 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
  if (not < 0 || not > 100) {
    alert("Not 0'dan küçük veya 100'den büyük olamaz")
  }
} while (not2 < 0 || not2 > 100)
console.log("Notunuz:", not2)

//! ------  FOR -------
let not3 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
for (; not3 < 0 || not3 > 100; ) {
  alert("Not 0'dan küçük veya 100'den büyük olamaz")
  not = prompt("Lütfen 0-100 arasinda bir not giriniz:")
}
console.log("Notunuz:", not3)




//?  ===============        5. DERS     =========================
//?
//? =============================================================

// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*****************************************/

//! Declaration (Fonksiyonun tanimlanmasi)
function yazdirMerhaba() {
  // alert("Merhaba FS14")
  console.log("Merhaba FS14")
}

yazdirMerhaba() //! invoke, call
yazdirMerhaba() //! invoke, call
yazdirMerhaba() //! invoke, call

//* ORNEK2:
//*****************************************/

//! Parametre listesi (argüman listesi)
function yazdirParametre(message, name = "Cohort14") {
  console.log(message, name)
}
yazdirParametre("Hello", "FS15")
yazdirParametre("Salut", "FS16")
yazdirParametre("Hola", "FS17")
yazdirParametre(12.4, true)

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki name
//! parametresi icin default değer olarak 'Cohort14' atanmistir.

yazdirParametre("Hallo")
yazdirParametre("Ehlen")
yazdirParametre()

//* ORNEK3:
//******************************************/
console.log(new Date()) //? Sistem tarihi ve saatini verir.

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob
  // console.log(`${name} is ${age} years old`)
  return age
}

console.log(calculate("Ahmet", 1990))
const ismetAge = calculate("İsmet", 1890)
console.log("Ismet's Age:", ismetAge)

//* ORNEK4:
//******************************************/

function add(num1, num2) {
  const sum = num1 + num2
  return sum
}

function addShort(num1, num2) {
  return (num1 + num2) / (num1 * num2)
}

const result1 = add(3, 5)
const result2 = add(5, 9)
const result3 = addShort(5, 9)

console.log(result1, result2)
console.log(result3)

//* ORNEK5:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "EVEN"
  } else {
    return "ODD"
  }
}
//? Alternatif olarak
function isEvenOrOdd(num) {
  let result
  if (num % 2 === 0) {
    result = "EVEN"
  } else {
    result = "ODD"
  }
  return result
}

//? Alternatif olarak
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "EVEN" : "ODD"
}

const num = prompt("Please enter a number:")
console.log(`${num} is ${isEvenOrOdd(num)}`)


// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")

//* ORNEK1:
//***********************************************/
yazdirMerhaba() //? hoisting oluyor (var değişkenleri)

function yazdirMerhaba() {
  console.log("Merhaba FS14")
}
yazdirMerhaba()

//* ----------------------------
//? Declarasyon (Function Expression)

// yazdir("Hallo FS14") //? invoke
//! ReferenceError: Cannot access 'yazdir' before initialization
//     at expression.js:19:1

const yazdir = function (message) {
  console.log(message)
}

yazdir("Hallo FS14") //? invoke

//* ORNEK2:
//*********************************************/

let oddEven = function (number) {
  return number % 2 === 0 ? "EVEN" : "ODD"
}

console.log(oddEven(5))
console.log(oddEven(2))

//* ORNEK3: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

//? Arrow

const kareAl = (num) => num * num
const topla = (s1, s2) => s1 + s2
const ciktiVer = () => console.log("Merhaba")

console.log("KARE:", kareAl(4))
console.log("TOPLA:", topla(4, 5))
ciktiVer()

//* ORNEK4: 3 sayinin en buyugunu bulan fonks.
//***********************************************/
//! Süslü parantez kullanıldığnda otomatik returning ozelligi kaybolur
const findBiggest = (n1, n2, n3) => {
  let biggest = n1

  if (n2 >= biggest) {
    biggest = n2
  }
  if (n3 >= biggest) {
    biggest = n3
  }
  return biggest
}

console.log("BIGGEST:", findBiggest(1, 3, 2))

//? Alternatif olarak
const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3)
console.log("BIGGEST:", findBiggestShort(1, 3, 2))



//?  ===============        6. DERS     =========================
//?
//? =============================================================

/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****")

//* ORNEK: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

//? Arrow

const kareAl = (num) => num * num
const topla = (s1, s2) => s1 + s2
const ciktiVer = () => console.log("Merhaba")

console.log("KARE:", kareAl(4))
console.log("TOPLA:", topla(4, 5))
ciktiVer()

//* ORNEK: 3 sayinin en buyugunu bulan fonks.
//***********************************************/
//! Süslü parantez kullanıldığnda otomatik returning ozelligi kaybolur
const findBiggest = (n1, n2, n3) => {
  let biggest = n1

  if (n2 >= biggest) {
    biggest = n2
  }
  if (n3 >= biggest) {
    biggest = n3
  }
  return biggest
}

console.log("BIGGEST:", findBiggest(1, 3, 2))

//? Alternatif olarak
const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3)
console.log("BIGGEST:", findBiggestShort(1, 3, 2))

//* ORNEK: Doğum tarihini parametre olarak alan ve ana
//* programa yaşı hesaplayıp döndüren fonksiyonu yazınız.
//******************************************************/

const calculateAge = (year) => new Date().getFullYear() - year

console.log(`AGE:${calculateAge(1990)}`)

//* ORNEK: Silindir Hacmi
//******************************************/
//? hacim = Pi x r x r x h

const h = Number(prompt("h:"))
const r = Number(prompt("r:"))
// const pi = 3.14

const volume = (r, h) => Math.PI * r * r * h
console.log("VOLUME:", volume(r, h).toFixed(2))
console.log("VOLUME:", volume(r, h).toPrecision(5))

//? toPrecision(5) aldigi parametreye gore bir sayinin tam ve kesir
//? kisimlarinin ne kadarini gosterilecegini belirlemek icin
//? kullanilabilir. 5 degeri tam ve kesir icin toplam 5 basamak kullan demektir.
console.log("VOLUME:", volume(r, h).toExponential(5))
//? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir (Hesap Makinası)
//**************************************************/
const add = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2
const mul = (n1, n2) => n1 * n2
const div = (n1, n2) => n1 / n2

const compute = (n1, n2, operator) => {
  let result = 0
  switch (operator) {
    case "+":
      //   result = n1 + n2
      result = add(n1, n2)
      break
    case "-":
      result = sub(n1, n2)
      break
    case "x":
    case "*":
      result = mul(n1, n2)
      break
    case "/":
      result = div(n1, n2)
      break
    default:
      alert("Incorrect Operator")
      result = ""
      break
  }

  return result
}

const n1 = +prompt("First Number:")
const operator = prompt("Operator:")
const n2 = +prompt("Second Number:")

console.log(`${n1}${operator}${n2}=${compute(n1, n2, operator)}`)

//* ORNEK: Girilen sayinin faktoriyelini hesaplayan programı fonksiyonlar yardımıyla kodlayiniz.

//? FIBONACCI terimleri:  n! = n * (n-1)!

//! ITERASYON YONTEMI ILE
//? Fakto(5) => 5.4.3.2

//! ITERASYON YONTEMI ILE
const fakto = (n) => {
  let f = 1
  for (let i = n; i > 1; i--) {
    f = f * i
  }
  return f

  //   for (let i = 2; i <= n; i++) {}
}

const number = +prompt("n:")

number < 0
  ? alert("Number should be bigger than zero")
  : console.log(`Fakto(${number})= ${fakto(number)}`)


  // ? ========================================
// ?             RECURSION
// ? ========================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

console.log("*** RECURSION ***")

//* ORNEK: Girilen sayinin faktoriyelini hesaplayan programi
//* recursive fonksiyonlar yardımıyla kodlayiniz.
//? FIBONACCI terimleri:  n! = n * (n-1)!
//? Fakto(5) => 5.4.3.2

const fakto = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * fakto(n - 1)
  }
}

const number = +prompt("n:")

number < 0
  ? alert("Number should be bigger than zero")
  : console.log(`Fakto(${number})= ${fakto(number)}`)



  // ? ======================================
// ?              SCOPE
// ? ======================================

console.log("******* SCOPE ********")

let number1 = 3 //?Global
let number2 = 5 //?Global
console.log(number1) //?3

const funk1 = () => {
  number1 = 44 //? Global deiskene atama yapildi
  const number2 = 7 //? local (block-scoped) degisken
  console.log("LOCAL:", number2) //? 7
}

funk1()

console.log(number1) //? 44
console.log("GLOBAL:", number2) //? global number2 (5)

//? Blocked Scope
{
  let x = 77
  x++
  console.log(x)
}
// console.log(x) //! Error: Scope Dışı

//! Uncaught SyntaxError: Identifier 'number2' has already been declared (at scope.js:29:5)
// let number2 = 99

number2 = 4
console.log(number2)

//  number3 = 101 //? hosited degisken (var)

// console.log(number3)
// var number3 = 101 //? Hoisted degiskendir

//? Muadili
var number3
console.log(number3)
number3 = 101 //? Hoisted degiskendir
console.log(number3)

// var result
if (number3 === 102) {
  let result = "Hi"
  console.log(result)
} else {
  console.log(result)
  var result = "Hello"
}
console.log(result)



//?  ===============        7. DERS     =========================
//?
//? =============================================================

let str1 = "This is a string"
let str2 = 'This is a string'
let str3 = `This is a string`
let str4 = new String("This is a string")

// console.log(typeof str1) // string
// console.log(typeof str2) // string
console.log( str3) // string
console.log( str4) // object

console.log(str3[0])

const str = 'Hello World';

console.log(str.length)
console.log(str[6])
console.log(str[11])

for (let i=0; i<str.length; i++){
    console.log(str[i]);
}

tersten itere
for(let i = str.length -1   ; i>=0; i--){
    console.log(str[i])
  }


for(let i = str.length ; i>0; i--){
    console.log(str[i-1])
  }

let str1 = 'I\'m a string'
let str2 = "I'm a\0string\""
console.log(str2)


alert('1- ders \n2-Kayıt\n 3-pre-class')
alert(`1- ders 
2-Kayıt 
3-pre-class`)


slice

let str1 = "Clarusway";
let str2 = str1.slice(-3);
console.log(str1)
console.log(str2)
console.log(str1.slice(-9,-3))

substring
let str= "Orange";
console.log(str.substring(0,4))
console.log(str.substring(4,0))
console.log(str.substring(2)) // 2 den başla sona kadar git
console.log(str.substring(str.length - 4)) //son 4 karakteri getir
console.log(str.substring( - 4)) //çalışmaz

console.log(str)

let str2 = str.substring(0,4);
console.log(str2)



concat

let str1 = "Clarusway";
let str2 = "Full";
let str3 = "Stack";
const result = str1.concat(" ", str2, " ", str3)
console.log(result)
console.log(str3)

let greet = 'Hello'

console.log(greet.concat(' World'))
console.log('Hello'.concat(' World'))


let isim = prompt('İsminiz nedir?')


console.log('Merhaba '.concat(isim))

console.log('Merhaba ' + isim)



includes

let str1 = "Clarusway";

console.log(str1.includes('l'))
console.log(str1.includes('l',1)) //1.indexten aramaya başla
console.log(str1.includes('l',2)) //2. indexten aramaya başla

indexof
let str1 = "Clarusway";

console.log(str1.indexOf('a')) //2
console.log(str1.indexOf('a',3)) //7
console.log(str1.indexOf('l',3)) // -1 İçerisinde bulunamadı


örnek

let email=prompt("email giriniz")
console.log(email.includes("@"));

let email = prompt("Enter your email")

if (email.indexOf("@") === -1) {
  console.log("Invalid email")
} else{
    console.log('Valid email')
}

function findCount(source, search) {
    let count = 0; // counter will start from 0
    let position = source.indexOf(search) // first search
  
    while (position !== -1) {// as long as we find search string, loop will go on 
      count++ // increase the counter
      position = source.indexOf(search, ++position) // search again, from where we stop +1
    }
    return count
  }
    
  let str = 'You do not know what you do not know until you know.';
  console.log (findCount(str, "know")); // 3


lastIndexof

let str = "Hello John, welcome to Clarusway.";

console.log(str.lastIndexOf("o")); // 21

console.log(str.lastIndexOf("o", 6));// 4
console.log(str.lastIndexOf("O", 6));// -1

console.log(str.indexOf("o"));// 4

search()

let str = 'You do not KNOW what you do not know until you know.';

console.log (str.search("know"));  // 32

console.log (str.search(/know/)); // 32 with regular expression

console.log (str.search(/know/i)); // 11 (i means not case sensitive)
console.log (str.search(/klow/i)); // -1 içerisinde yoksa -1 döner

let str1 = 'hello World';
const arama = /[A-Z]/; // A-Z arası bütün büyük harfler
const arama2 = /[a-z]/; // A-Z arası bütün büyük harfler

console.log(str1.search(arama))

replace

let str = "Mr Brown has a brown house and a brown car";

let newStr = str.replace("brown", "red");
let newStr2 = str.replace(/brown/i, "red"); // casesensitivite ignore eder
let newStr3 = str.replace(/brown/ig, "red"); // ne kadar varsa değiştirir.
let newStr4 = str.replace(/brown/g, "red"); // küçük brownların tümünü değiştirir.

console.log(newStr);
console.log(newStr2);
console.log(newStr3);
console.log(newStr4);


replaceAll

let str = "Mr Brown has a brown house and a brown car";

console.log(str.replaceAll('Brown', 'red')) // sorguyu uyan tüm sonuçları değiştirir.


split stringi array e çevirir.

let str = "Welcome to: Full Stack";

console.log(str.split())
console.log(str.split(' '))
console.log(str.split(':'))
console.log(str.split('Full'))
console.log(str.split('full'))

let arr = str.split(' ')

console.log(arr)
console.log(str)

toLowercase & toUpperCase

let str = "Welcome to Full Stack";
let str = "ĞŞİüöÇççççüüğğşşiiiööçç";
console.log(str.toLowerCase());
console.log(str.toLocaleLowerCase()) 

console.log(str.toUpperCase());
console.log(str.toLocaleUpperCase('TR'));


trim

let str = "     Welcome to Full Stack    ";
console.log(str)
console.log(str.trim()) // Hem balştaki hem sondaki boşlukları temizler
console.log(str.trimStart()) // Baştaki boşlukları temizler
console.log(str.trimEnd()) // sondaki boşlukları temizler


startsWith & endWith

let str = "clarusway@Clarusway.com is our e-mail address";

console.log(str.startsWith("clarusway"))
console.log(str.startsWith("Clarusway"))
console.log(str.startsWith("Clarusway",10))

let email = "clarusway@Clarusway.com"

console.log(email.endsWith('com'))


chaining

let str = "         Clarusway Full Stack"

let str1 = str.trim() // Clarusway Full Stack

let str2 = str1.slice(0,9) // Clarusway

let str3 = str2.toUpperCase() // CLARUSWAY

console.log(str3) // CLARUSWAY


console.log(str.trim().slice(0,9).toUpperCase())



//?  ===============        8. DERS     =========================
//?
//? =============================================================


const arr = [100, 'CW', false]
console.log(arr)

const dizi = new Array(100, 'CW', true);

console.log(dizi)


const dizi2 = new Array(10)

console.log(dizi2)

const colors = ['Red','Green','Blue']

console.log(colors[0])
console.log(colors[colors.length - 1]) //son elaman
console.log(colors[colors.length - 2]) //sondan ikinciye ulaşım.
console.log(colors[-1]) //undefined
console.log(colors[56]) //undefined


Array is Array
const colors = ['Red','Green','Blue'];
console.log(typeof colors);

console.log(Array.isArray(colors)) //true 
console.log(colors instanceof Array) //true 


const variables = '1';
console.log(Array.isArray(variables)) //false 
console.log(variables instanceof Array) //false 


Strings immutable değiştirilemez
let str = 'Brown';
console.log(str[0])
str[0]='b';
console.log(str)

str = 'brown'

Arrayle mutable yani değiştirilebilir
const colors = ['Red','Green','Blue'];

colors[1] = 'yellow' //mevcudu değiştirir

console.log(colors)


//ekleme yapar
colors[3]= 5

console.log(colors)

let c = 'Pink'

colors[4] = c

console.log(colors)

const colors = ['Red','Green','Blue'];

colors[6] = 2
console.log(colors)
console.log(colors.length)
console.log(colors[3])

colors[100] = 'Pink';

console.log(colors)


// primitiveler
let a = 5;
let b = a;
console.log(a)
console.log(b)

a= 6;
console.log(b)

b=a
console.log(b)

//non-primitiveler

let arr1 = [1,2,'Three',false];

const arr2 = arr1;

console.log(arr1)
console.log(arr2)

arr1[0]=0

console.log(arr1)
console.log(arr2)

const c = ['2'];
console.log(c)

console.log(Boolean(c))

const d = ['2']
console.log(c == d) //false çünkü adresleri farklı

console.log(arr1 == arr2) // true çünkü adresler aynı

 arr1 = ['four'] //let ile tanımlandığı için onaylanır

 arr2 = ['four'] // const ile tanımlandığı için onay verilmez



 Array metodları

 const colors = ['Red','Green', 'Blue','Yellow','Brown'];

const cls = colors.slice() // orjinal array in içeriğini kopyalar

console.log(colors)
console.log(cls)

colors[0] = 'Black'

console.log(colors)
console.log(cls) */

console.log(colors.slice(2,4)) //Blue yellow
console.log(colors.slice(-2)) //yellow Brown
console.log(colors.slice(2)) // ['Blue', 'Yellow', 'Brown']
console.log(colors.slice(8)) // [] limit dışı
console.log(colors.slice(-2,1)) // [] hatalı indexleme
console.log(colors.slice(-3,-1)) // ['Blue', 'Yellow']


Push ()

const colors = ['Red','Green'];
console.log(colors.length)

let c = 'White';

// const d = colors.push('Blue',2023,c)

console.log(colors.push('Blue',2023,c))
// colors.push(2023)

console.log(colors.length)
console.log(d + ' d')


const car = ['Audi', 'BMW']

const car2 = ['Ford', 'Tesla', 'Mercedes']

car.push(car2) //['Audi', 'BMW', ['Ford', 'Tesla','Mercedes']] array in tamamını tek bir eleman olarak gönderir
car.push(...car2) //['Audi', 'BMW', 'Ford', 'Tesla','Mercedes'] diğer arrayin her elemanını ayrı ayrı dahil eder.

console.log(car[2][2]) //Mercedes çıkar



pop 

const car = ['Audi', 'BMW']

console.log(car.pop()) //BMW yi siler consola yazdırır

const silinen = car.pop()

console.log(silinen)

console.log(car.pop())


unshift

const colors = ['Green','Blue']

console.log(colors.unshift('Red')) //yeni oluşan array in uzunluğunu verir.
console.log(colors) //['Red', 'Green', 'Blue']

const car = ['Audi', 'BMW']
const car2 = ['Ford', 'Tesla', 'Mercedes']

car.unshift(car2) // 2. array i tek array olarak başa ekler. [['Ford', 'Tesla', 'Mercedes'],'Audi', 'BMW']
car.unshift(...car2) // her elemanı ayrı ayrı başa ekler. ['Ford', 'Tesla', 'Mercedes','Audi', 'BMW']

console.log(car)

shift

const colors = ['Red','Green', 'Blue','Yellow','Brown'];

console.log(colors.shift()) //İlk elemanı siler, sildiği değeri döndürür.

console.log(colors)


splice

const colors = ['Red','Green', 'Blue','Yellow','Brown']

Eleman silme
console.log(colors.splice(2,1)) // 2. index e git 1 eleman sil
console.log(colors.splice(2)) // 2. index e git sonuna kadar sil

console.log(colors)

Eleman ekleme

console.log(colors.splice(2,0, 'White')) //2. indexe git 0 elaman sil white ı ekle. Silmediği için [] döner.

console.log(colors)


Eleman değiştirme

console.log(colors.splice(3,1,'Pink'))
console.log(colors.splice(3,2,'Pink','Black')) //3 e git 2 elaman sil yerine uenilerini ekle. Silinenler aarray olarak döner

console.log(colors)


concat

let color1 = [ 'red', 'green']
const color2 = ['blue', 'orange']
const color3 = [10, true]

// const joinedArray = color1.concat(color2, color3)
// console.log(color1) 
// const destr = color1.push(...color2, ...color3)
// console.log(color1) 

color1 = color1.concat('Black',color2,2)
console.log(color1)

indexof lastindexof

const colors = ['Red','Green', 'Blue','Brown','Green']
console.log(colors.indexOf('Green'))//1
console.log(colors.indexOf('Green',3)) //4
console.log(colors.indexOf('green')) //-1 bulamazsa
console.log(colors.lastIndexOf("Green")); //4
console.log(colors.lastIndexOf("Green",-2)); //1
console.log(colors.lastIndexOf("Green",3)); //1
console.log(colors.lastIndexOf("green")); //-1 

console.log(colors[colors.indexOf("Green")])


reverse
const colors = ['Red','Green', 'Blue','Green','Brown','yellow']
colors.reverse() //orjinal array i değiştirir.
console.log(colors)


join 

const arr = [ 'C', 'l', 'a', 'r', 'u', 's', 'w', 'a', 'y' ]

console.log(arr.join()) // C,l,a,r,u,s,w,a,y

console.log(arr.join("")) // Clarusway

console.log(arr.join("-")) // C-l-a-r-u-s-w-a-y
console.log(arr)

orjinal array bozulmaz. Array ii stringe çevirir


sort

const arr = [ 55, 5, 22, 2, 11, 1, 111 ]
arr.sort()
console.log(arr)

// ascending sorting
arr.sort((a,b) => a-b)
console.log(arr) // [ 1, 2, 5, 11, 22, 55, 111 ]

// descending sorting
arr.sort((a,b) => b-a) //numeritik olarak sıralar
console.log(arr) // [ 111, 55, 22, 11, 5,  2,  1 ]

includes
const arr = [ 'red', 'blue', 'Purple', "white", "orange" ]

console.log(arr.includes('blue')) // true

console.log(arr.includes('Blue')) // false

console.log(arr.includes('blue', 2)) // false */


Nested Arrays

const arr = [1, true, [6, 7, 8], [3, 'Red', 5] ]
arr.sort()
arr[2].splice(1,1,'yellow')
console.log(arr.length)

console.log(arr[0]) // 1

console.log(arr[2]) // [3, 'Red', 5]
console.log(arr[3]) // [6, 7, 8]

console.log(arr[2][0]) // 3
console.log(arr[2][1]) // Red
console.log(arr[2][2]) // 5

console.log(arr[3][2]) //8


ek bilgi

const arr = ['Red','Green',,,,,'Blue']

console.log(arr)


//?  ===============        3. DERS     =========================
//?
//? =============================================================

//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
const prices = [250, 150, 300, 500]

//* KLASIK FOR
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i])
}
console.log("*********")

//* FOREACH
prices.forEach((p) => console.log(p))

console.log("*********")
prices.forEach((p, i) => console.log("DEGER:", p, "INDIS:", i))

//?-------------- ÖRNEK -------------------
//?  Dizideki toplam fiyati hesaplayalim.
let sum = 0
prices.forEach((price) => (sum += price))
console.log("SUM:", sum)

console.log("*********")
//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => price * 2))

//* Foreach ile dongu icerisinde herhangi bir item okunabilir, listelenbilir veya yazdirilabilir. Ancak bu degeri dondurmek mümkün değildir.
prices.forEach((price) => console.log(price * 2))

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const upperName = names.map((name) => name.toLocaleUpperCase())
console.log(upperName)
console.log(names)

//! Orjinal dizi yi modifiye etmek için 3. parametre kullanilabilir.
names.map((name, i, arr) => {
  arr[i] = name.toLocaleUpperCase()
})

console.log(names)

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 21.78
const dolar = 19.8
const tlPrices = [100, 150, 100, 50, 80]

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)))
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)))

console.log(dolarPrices)
console.log(euroPrices)
console.log(tlPrices)

//* =======================================
//*             FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const biggerThan = salaries.filter((salary) => salary >= 10000)
console.log(biggerThan)
console.log(salaries)

const range = salaries.filter((salary) => salary >= 8000 && salary <= 10000)
console.log(range)
//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const biggerThan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))

console.log(biggerThan9000)

salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))
  .forEach((s) => console.log(s)) //? Consuming

//* =======================================
//*             REDUCE METHOD
//* =======================================

const mayişlar = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const toplamMayiş = mayişlar.reduce((toplam, deger) => toplam + deger, 0)

console.log("TOPLAM MAYIŞ:", toplamMayiş)

//? ORNEK:maasi 6000 ile 10000 tl arasindaki arkadaslara %10 zam yapip bu maaşların toplamini hesaplayacagiz.

const zamliMaasToplami = mayişlar
  .filter((m) => m >= 6000 && m <= 10000)
  .map((m) => m * 1.1)
  .reduce((t, m) => t + m)

console.log("ZAMLI MAASLAR:", zamliMaasToplami)

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15]
const check = ages.every((age) => age >= 18)
check ? console.log("All ages are over 18") : console.log("Sum are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1


//* ============================================
//*                FOR LOOP
//* ============================================

console.log("**** LOOPS IN ARRAYS ***")

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]

let sum = 0
for (let i = 0; i < grades.length; i++) {
  sum += grades[i]
  //   console.log(sum)
}

console.log("AVG:", (sum / grades.length).toFixed(2))

//?-------------- ÖRNEK -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]
const lessThan50 = []
const equalOrBiggerThan50 = []

for (let j = 0; j < grades.length; j++) {
  if (grades[j] < 50) {
    lessThan50.push(grades[j])
  } else {
    equalOrBiggerThan50.push(grades[j])
  }
}
console.log(lessThan50)
console.log(equalOrBiggerThan50)
console.log(grades)

//?-------------- ÖRNEK (FOR-IN) -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]
const lessThan50 = []
const equalOrBiggerThan50 = []

for (let i in grades) {
  grades[i] < 50
    ? lessThan50.push(grades[i])
    : equalOrBiggerThan50.push(grades[i])
}

console.log(lessThan50)
console.log(equalOrBiggerThan50)
console.log(grades)

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const findStudent = (name) => {
  let counter = 0

  for (let student of students) {
    student === name.toLowerCase() && counter++ //* aranan, dizinin icindeki elemana esitse
  }

  return counter === 0
    ? `${name} can not be found`
    : `${name} found ${counter} times`
}

console.log(findStudent("Ahmet"))
console.log(findStudent("AHMET"))
console.log(findStudent("ismet"))
console.log(findStudent("Alihan"))



//?  ===============        10. DERS     =========================
//?
//? =============================================================

//* ============================================
//*                FOR LOOP
//* ============================================

console.log("**** LOOPS IN ARRAYS ***")

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]

let sum = 0
for (let i = 0; i < grades.length; i++) {
  sum += grades[i]
  //   console.log(sum)
}

console.log("AVG:", (sum / grades.length).toFixed(2))

//?-------------- ÖRNEK -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]
const lessThan50 = []
const equalOrBiggerThan50 = []

for (let j = 0; j < grades.length; j++) {
  if (grades[j] < 50) {
    lessThan50.push(grades[j])
  } else {
    equalOrBiggerThan50.push(grades[j])
  }
}
console.log(lessThan50)
console.log(equalOrBiggerThan50)
console.log(grades)

//?-------------- ÖRNEK (FOR-IN) -------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]
const lessThan50 = []
const equalOrBiggerThan50 = []

for (let i in grades) {
  grades[i] < 50
    ? lessThan50.push(grades[i])
    : equalOrBiggerThan50.push(grades[i])
}

console.log(lessThan50)
console.log(equalOrBiggerThan50)
console.log(grades)

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const findStudent = (name) => {
  let counter = 0

  for (let student of students) {
    student === name.toLowerCase() && counter++ //* aranan, dizinin icindeki elemana esitse
  }

  return counter === 0
    ? `${name} can not be found`
    : `${name} found ${counter} times`
}

console.log(findStudent("Ahmet"))
console.log(findStudent("AHMET"))
console.log(findStudent("ismet"))
console.log(findStudent("Alihan"))



//?  ===============       11. DERS     =========================
//?
//? =============================================================

// //* ======================================================
// //*  DESTRUCTURING (OBJECT)
// //* ======================================================
console.log("****** NEW OPERATORS *******")

const car = {
  brand: "BMW",
  model: 2020,
  engine: 2000,
  colors: ["pink", "blue"],
}

// //? 1.Yontem (. notasyon)
const brand = car.brand
console.log(brand)

// //? 2.Yontem (square bracket)
console.log(car["model"])

// //? 3. Destructure
const { brand: name, engine, colors } = car //? object destr.
console.log(engine, colors, name)

const { model } = car
console.log(model)

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
  car3: ["anadol", "togg", "devrim"],
  car4: "kağnı",
}

let { car1, car2, car4, car3 } = cars //? 1 seviye destr.
console.log(car2, car4)
console.log(model);

const { name: c1Name, model: c1Model } = car1 //? 2 seviye dest.


const { name: c2Name, model: c2Model } = car2
console.log(c2Name, c2Model)

//? Alternativly
const {
  car1: { nameCar1, modelCar1, engineCar1 },
  car2: { nameCar2, modelCar2, engineCar2 },
} = cars

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
]
//? KLASIK
team.forEach((t) => {
  console.log("NAME:", t.name)
  console.log("SURNAME:", t.surname)
  console.log("JOB:", t["job"])
  console.log("AGE:", t["age"])
  console.log("**************")
})

// //? DESTR.
team.forEach((person) => {
  const { name, surname, job, age } = person
  console.log("NAME:", name)
  console.log("SURNAME:", surname)
  console.log("JOB:", job)
  console.log("AGE:", age)
  console.log("**************")
})
//!----  FUNCTIONLARDA DEATRUC. KULLANIMI ----

// //? Donus degeri olarak
const getProduct = () => {
  return {
    id: "123",
    pName: "NIKE",
    price: 300,
    stock: 1000,
  }
}

// console.log(getProduct())
let { pName, price, stock } = getProduct()
// //* function'un dondurdugu obje dogrudan dest. yapilabilir

console.log("PRODUCT NAME:", pName, "PRICE:", price)

stock = stock - 100
console.log("REMAINING STOCK:", stock)

// //? Parametre olarak
const data = {
  id: "123",
  pName: "NIKE",
  price: 300,
}
const print = function (data) {
  const { id, pName, price } = data
  console.log(pName, price)
}

const print = function ({ pName, price }) {
//   //? Yolda destr.
  console.log(pName, price)
}

print(data)

// //* ======================================================
// //*  DESTRUCTURING (ARRAY)
// //* ======================================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"]

// //? Klasik
const ismet = names[2]
console.log(ismet)

const [ahmo, , ismo, safo] = names

console.log(ahmo, ismo, safo)

// //*======================================================
// //*  REST (...)
// //* ======================================================

// //? REST operatoru kullanici tarafindan girilen degerleri dizi
// //? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

// //! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
// //!    ayri dizi yada objelere kopyalanmasini saglayabilir.

// //* REST: Array
const araclar = ["bmw", "merso", "ferarri", "rover", "lambo"]

const [araba1, araba2, araba3, ...geriKalanlar] = araclar
console.log(araba1)
console.log(geriKalanlar)

// //* REST: Object

const kisi = {
  ad: "Canan",
  soyad: "Cano",
  yas: 33,
  meslek: "tester",
}

const { meslek, yas, ...isim } = kisi

console.log(meslek, yas)
console.log(isim)
console.log(kisi)

// //! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const topla = (a, b) => a + b

console.log("SONUC:", topla(2, 5, 10, 4))

// //? REST (...) ile non-iterable olan sayilari iterable hale (diziye)
// //? cevirmiş olduk.

const toplaminiAl = (...sayilar) => {
  console.log(sayilar)
  return sayilar.reduce((t, v) => t + v, 0)
}
console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8))

// //*==================================================
// //*  SPREAD (...)
// //* =================================================

// //? Spread operatoru ise iterables olan bir elemani bireysel
// //? degerler haline getirir.

const ucanAraclar = ["drone", "heli", "ucak"]
const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"]

const tasitlar = [ucanAraclar, karaAraclari]
console.log(tasitlar)
console.log(tasitlar[0][1])

const tasitlar1 = [...karaAraclari, "Kamyon", ...ucanAraclar]
console.log(tasitlar1)

const cumle = "Olmak ya da olmamak"

const karakter = [...cumle]
console.log(karakter)
console.log(cumle)

console.log("MAX:", Math.max(1, 3, 4, -1, 4))
const rakamlar = [23, 45, 66, 77, 12, -1]

// //? MATH.MIN
console.log("MIN:", Math.min(...rakamlar))

// //? Array Copy
const myNumbers = [4, 5, 6, [11, 22]]
const herNumbers = [1, 2, 3, ...myNumbers]
const hisNumbers = [...herNumbers]

console.log(herNumbers, myNumbers)
console.log(hisNumbers)

hisNumbers.push(7)
myNumbers.push(77)

console.log("MY:", myNumbers)
console.log("HER:", herNumbers)
console.log("HIS:", hisNumbers)

myNumbers[3][1] = 44 //? spread kullanılsa dahi nested olan alanlar deep copy olmaz.

// //? Sıg Kopyalama
const theirNumbers = hisNumbers

theirNumbers.push(8)
console.log(theirNumbers, hisNumbers)

// //? Object copying

const firstObj = { a: 1, b: 2, c: 3 }
const secondObj = { a: 2, d: 3, c: 4 }

const copiedFirstObj = { ...firstObj }
console.log(copiedFirstObj)

copiedFirstObj.a = 44
// //? nesting olmadigi icin deep copy gibi davranir.
console.log(copiedFirstObj, firstObj)

const combinedObjs = { ...secondObj, ...firstObj }
console.log(combinedObjs)

// //? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
}

console.log("MAAAS:", people.person3.salary)

// //! FOR - IN
// //* for (key in object) {
// //*   // code block to be executed
// //* }

for (let p in people) {
  console.log(p)
  console.log(people[p]) //? square bracket notasyon
  console.log(people[p].salary) //? square bracket notasyon
}

// //? Javascript'de Objeler default olarak iterable degildir.
// //? Ama for in ve for of donguleri ile itere edilebilirler.

// //? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
// //? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people))

// //! FOR - OF
// //* for (x of iterable) {
// //*   code block to be executed
// //* }

console.log("****************")
for (let key of Object.keys(people)) {
  console.log(key)
}

console.log("****************")
// //? people objesindeki tum salary 'leri yazdir
for (let v of Object.values(people)) {
  console.log(v.job)
  console.log(v["salary"]);
}



//?  ===============        12. DERS     =========================
//?
//? =============================================================

console.log("***** SELECTORS *****")

document.title = "DOM DOM 🚀"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
// document.getElementById("header").style.border = "1px solid red"
const myHeader = document.getElementById("header")
console.log(myHeader)

myHeader.style.backgroundColor = "red"
myHeader.style.color = "white"

//* Add Buton
const addButon = document.getElementById("btn")
console.log(addButon)

addButon.style.backgroundColor = "#bebe"
addButon.style.border = "none"
addButon.style.borderRadius = "10px"
addButon.style.padding = "0.6rem"

//? Deger atama
addButon.value = "SAVE"

//* h1
const h1 = document.getElementById("heading1")
console.log(h1)

//? Deger atama
h1.textContent = "DOM Introduction"

//? Deger okuma
console.log(h1.textContent)
console.log(h1.innerText)
console.log(h1.innerHTML)

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const myInputs = document.getElementsByTagName("input")
console.log(myInputs) //? [input#input, input#btn, input: input#input, btn: input#btn]

//! HTML Collection (Array-Like) dondurur.
console.log("Size:", myInputs.length)

console.log(myInputs[0])
console.log(myInputs[1])

console.log(document.getElementsByTagName("h3")[0])

//? indisle erişime ek olarak item() metodu ile de erisim yapilabilir.
console.log(myInputs.item(1))

//? Array'e cevilebilir.
const myLists = document.getElementsByTagName("li")
const myListsArr = [...myLists] //?Array'e cevir
console.log(myListsArr)

myListsArr.forEach((li) => (li.style.color = "red"))

//?Alternative olarak
const myListsArr1 = Array.from(myLists) //?Array'e cevir
console.log(myListsArr1)
myListsArr1.map((li) => (li.style.listStyleType = "none"))
//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
const lists = document.getElementsByClassName("list") //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

const listsArr = [...lists]
listsArr.forEach((li) => console.log(li))

// lists[2].innerHTML = "Javascript language"
lists[2].innerHTML = `<h1>Javascript</h1>`
lists[3].innerText = `<h1>React</h1>`
lists[4].textContent = `<h1>VUE</h1>`
//* ========================================
//*              QUERYSELECTOR()
//* ========================================
// ! QUery Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer

//? id secildi (#)
const header = document.querySelector("#header")
console.log(header)

//? class secildi (.)
const itemLists = document.querySelector(".list")
console.log(itemLists)

//? h2 tag'ı secilmis oldu.
const h2 = document.querySelector("h2")
console.log(h2)

//? CSS deki selector mantigi kullanabilir
const otherH2 = document.querySelector("section h2")

const buton = document.querySelector("section.add-item #btn")
console.log(buton)

const react = document.querySelector("section.item-list ul li:nth-child(4)")
console.log(react)

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const listeler = document.querySelectorAll("ul li")
console.log(listeler) //? NodeList(5) [li.list, li.list, li.list, li.list, li.list]

listeler.forEach((li) => console.log(li))

//? alternative olarak
for (const liste of listeler.values()) {
  console.log(liste)
}



//?  ===============        12. DERS     =========================
//?
//? =============================================================

console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode
const addItem = document.querySelector(".add-item")
console.log(addItem)

console.log(addItem.parentElement) //? main
console.log(addItem.parentNode.parentNode) //? body

//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer

const list = document.querySelector(".list")
console.log(list.textContent)

console.log(list.closest("section")) //?//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer

console.log(list.closest("body").querySelector("header h1").innerText)

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild

console.log(addItem.children) //?HTMLCollection(3) [h2, input#input, input#btn, input: input#input, btn: input#btn]

console.log(addItem.children[2]) //?

console.log(addItem.firstElementChild) //? h2
console.log(addItem.lastElementChild) //? ADD Buton

console.log(addItem.firstChild) //? Merhaba section

//? firstChild bir yazi elementinin icerisindeki yazi dugumunu verir.

console.log(document.querySelector("h1").firstChild) //?DOM SELECTORS

//*3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling

const ul = document.querySelector("ul")

const lists = ul.children
console.log(lists)

const js = lists[2]
console.log(js.innerText) //? Javascript

const css = js.previousElementSibling
console.log(css.innerText) //? CSS

const django = js.nextElementSibling.nextElementSibling
console.log(django.innerHTML) //? Django


//?  ===============        13. DERS     =========================
//?
//? =============================================================

console.log("**** CREATE NODE ****");

//* ------- YENI BIR ELEMENT OLUSTURMA ------

const langInput = document.querySelector("#input")

const newLi = document.createElement("li")
const isim = document.createTextNode("murat");

newLi.appendChild(isim)
const ul = document.querySelector('ul li:nth-')

  ul.before(newLi)




// //? 1- olustur
const newP = document.createElement("p");
const newH2 = document.createElement('h2')

// //? 2-Eger text tabanlı bir element ise text dugumunu olustur
const text = document.createTextNode("Bu bir yeni p elementidir.");
const text = document.createTextNode(langInput.value)
newH2.appendChild(text)
// //? 3- Olusturulan text dugumunu yeni elemente bagla (append)

console.log(newP)
// //? 4- Yeni elementin DOM tree baglanmasi (append)

// //* main bolumun en sonuna yeni elementi ekler.
const main = document.querySelector("main");
main.appendChild(newP);

// //* item-list section'nın onune yeni elementi ekler.
// //! Element.before()  ve Element.after() appenChild gibi aslında bir elementi DOM Tree'ye baglar.
const itemListSection = document.querySelector(".item-list");
itemListSection.after(newP);
const header = document.querySelector('#header')
header.after(newH2)

itemListSection.after(newH2);

// //* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------
// //? 1) Yontem
newP.id = "paragraf"
newP.className = "par center"
newP.name = "deneme"

// //? 2) setAttribute()
newP.setAttribute("id", "new-id")
newP.setAttribute("class", "new-class")
newP.setAttribute("name", "new-class")
newP.setAttribute("type", "button")

//? 3) classList
newP.classList.add("bg-danger", "border")

console.log(newP.classList.contains("new-class"))

// //* classList.contains()
if (newP.classList.contains("border")) {
  newP.classList.add("border-success")
// }

// //* classList.remove()
if (newP.classList.contains("new-class")) {
  newP.classList.remove("new-class")
// }

// //* classList.toggle()  (bir class varsa kaldirir yoksa ekler)
newP.classList.toggle("bg-danger")

// //* ------- ID, CLASS GIBI OZELLIKLERINI OKUMA ------
//? 1) Yontem
console.log(newP.id)
console.log(newP.className)

// //? 2) getAttribute()
console.log(newP.getAttribute("type"))
console.log(newP.getAttribute("class"))

// //* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------
const ul = document.querySelector("ul")

ul.innerHTML += `
   <li>C++</li>
   <li>java</li>
   <li>C</li>
   <li>go</li>`

// //* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------

const newDiv = document.createElement("div")
newDiv.id = "my-div"
itemListSection.after(newDiv)

newDiv.innerHTML += `
<h2 class="par center">Languages</h2>
<ul>
  <li>C++</li>
  <li>java</li>
  <li>C</li>
  <li>go</li>
</ul>`


//?  ===============        13. DERS     =========================
//?
//? =============================================================




//?  ===============        13. DERS     =========================
//?
//? =============================================================





//?  ===============        13. DERS     =========================
//?
//? =============================================================





//?  ===============        13. DERS     =========================
//?
//? =============================================================






