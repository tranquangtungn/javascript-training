
// 2.1 factorial of a number
function getFactorial(num) {
    var fac = 1;
    //
    if (num <= 0)
        return;

    for (var i = 1; i <= num; i++) {
        fac *= i;
    }
    console.log(fac);
}

//2.2 get random between 2 num
function getRandomWith2Num(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1) ) + min;
    return result;
}
arr1 = [1,2,3,4,5,6,7];
arr2 = [5,6,7,8,9,10];
//2.3 get random ele from a array
function getRndValueInArray(arr)
{
    var count = arr.length;
    var indexRnd = getRandomWith2Num(0,count-1);
    console.log("arrNum["+indexRnd+"]:"+ arr[indexRnd]);
}
//2.4 get missing ele
function getMissingElements(arr1, arr2)
{
    
    var len2 = arr2.length;
    console.log(len2);
    var arrResult = [];
    for (var i =0;i<len2;i++)
    {
        if(!checkElement(arr2[i]))
        arrResult.push(arr2[i])
    }
    return arrResult;
}
function checkElement(a)
{
    var len1= arr1.length;
    console.log(len1)
    for(var i=0;i<len1;i++)
        {
            if (a===(arr1[i]))
                return true;
        }
    return false;
}