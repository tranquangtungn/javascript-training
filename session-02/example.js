
function countDownTime(n) {
    for (let i = 0; i <= n; i++) {
        x = setTimeout(function () {
            console.log(i);
        }, 1000 * (n - i));
    }
}

var text = document.createElement("div");
setInterval(function(){
    const today = new Date(Date.now());
    text.innerHTML = today.getHours()+":"+ today.getMinutes()+ ":"+ today.getSeconds();
    document.body.appendChild(text);
},1000)
