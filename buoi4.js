/*/10 array methor 
var arrayNames = ['teo','ti','chuot ', 'ca','chim ', 'rua']
//them du lieu vao vi tri cuoi cua mảng
arrayNames.push('tuan')
console.log(arrayNames)
//xóa du lieu cuoi dong tem
arrayNames.pop()
console.log(arrayNames)
//them du lieu vao vi tri dau cuoi mang 
arrayNames.unshift('thanh')
console.log(arrayNames)
//xoa vi tri dau mang c
arrayNames.shift()
console.log(arrayNames)
//them du lieu o giua mang dau 1 vi tri 0 so luong 
arrayNames.splice(1,0,'binh','minh')
console.log(arrayNames)
//xoa du lieu giua mang dau
arrayNames.splice(1,2)
console.log(arrayNames)*/
//function removeEnd(arr, n) {
//    var newArr = []
//    arr.splice()
//}

//console.log(removeEnd([2, 3, 1, 8, 9, 7], 3)); // [2,3,1]
function double (num)
{
    return num *2
}
function sumAnddo(nums, callback) {
    var result  = 0; 
    for (var elemnt of nums )
    {
        result += callback(elemnt);
    }
    console.log(result)
}
sumAnddo([1,2,3],double);