
// 1.3 get words count
var input = "oneTrueTree"
var count = 1;
function check(char) {


    return char === char.toUpperCase()
}
len = input.length;
for (var i = 0; i < len; i++) {
    if (check(input[i]))
        count++;
}
console.log(count);