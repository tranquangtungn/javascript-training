// 1.1 format money string
function formatMoney1(money) {
    var result = "";
    // tách phần thập phân và nguyên
    var decPart = (money + "").split(".");
    var decPart1 = decPart[0];
    var decPart2 = decPart[1];
    // xử lý phần nguyên
    var len = decPart1.length;
    if (len <= 3)
        result = decPart1;
    else {
        for (var i = 0; i < len; i++) {
            if ((len - i) % 3 === 0)
                result = result + "," + decPart1[i];
            else
                result += decPart1[i];
        }
    }
    result = checkOutput(result);
    //output
    console.log(result + "." + decPart2);
    //console.log(input);
    //console.log(len);
}

function checkOutput(output) {
    if (output[0] === ',')
        return output.substring(1);
    else
        return output;
}

//1.2 format money shorten
function formatMoney2(money, number) {
    var measure = "";
    var numMoney = Number(money)
    var count = 0;
    while (numMoney > 1000) {
        numMoney /= 1000;
        count++;
    }
    switch (count) {
        case 1: measure = "K"; break;
        case 2: measure = "M"; break;
        case 3: measure = "B"; break;
        case 4: measure = "T"; break;
    }

    dec = Math.pow(10,number); // số chữ số phần thập phân
    dec2 = dec * 10; // số chữ số phần thập phân + 1
        var result1 = Math.round(numMoney * dec) / dec ;
        var result2 = Math.round(numMoney * dec2) / dec2;
    console.log(result1);
    console.log(result2);
    if(result1 <= result2) 
        numMoney = result1 ;
    else
        numMoney = customFloor(result1)
    
    console.log(numMoney + measure);
}
function customFloor(num)
{
    var result = (num + "").split(".");
    result[1] -= 1;
    return result[0] + "." + result[1];
}

//1.4 get Extension of file
function getExtension(file) {
    var result = (file + "").split(".");
    console.log( result[1]);
}