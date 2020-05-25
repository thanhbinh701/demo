// let iterable = [20, 14, 23]
// for (let valus of iterable) {
//     valus +=1; 
//     console.log(valus);
// }
// var element = ['tai','tan','beo','minh','y']
// for (var arr of element) {
//     console.log(arr)
// // }
// var iterable ='boo'
// for(var value of iterable)
// value += value
// console.log(value)
// var iterable = new Map ([['a',1], ['b',2],['c',3],['d',4]])
// for (var value of iterable) {
//     console.log(value)
// }
// for (var [key, value] of iterable) {
//     console.log(value);
// }
// var iterable = new Set([1,1,1,2,2,3,3,3,3]);
// for (var value of iterable ){
//     console.log(value);}
// function* foo(){
//     yield 1; 
//     yield 2; 
//     yield 3;
//     yield 4; 
// }
// for (let o of foo())
// {
//     console.log(o);
//     break;
// }

// function multiply(arr){
//     var result = 1;
//     for (var element of arr)
//      result *= element;
//     return result ;
// }
// console.log(multiply([2,3,4]));
// function multiply (arr){
//     var resutl = 1;
//     for (var element of arr){
//         resutl *= element;
//     }
//     return resutl;
// }
// // console.log(multiply([2,3,4]));
// var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
  
// function getkey(object)
// {
//     for (var element in object){
//         console.log(element)
//         for (var elementbedroom in object[element]){
//             console.log(elementbedroom)
//             for (var elementbed in object[element][elementbedroom]){
//                 console.log(elementbed)
//             }
//         }
//     }
// }
// getkey(apartment);
// function getkey(object)
// {
// for (var element in object)
// {
//   console.log(element);
//   if(typeof object[element] == 'objcet'){
//       getkey(object[element]);
//   }
// }
// }
// getkey(apartment);
var array = ['tuan', 'thanh','binh','y ','minh','vo'];
var arrayName = ['dam','nga','trang'];
//array.push('tai')
//array.pop()
// array.unshift('hong')
// array.shift()
//array.splice(1,0,"tri")
//array.splice(2,0,'tham')
//array.splice(2,1,'tien')
//array.splice(2,0,'quang','minh','hong ','an')
//array.splice(-2,1)
array.splice(2)
console.log(array)










