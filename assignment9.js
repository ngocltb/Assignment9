valuerandom=Math.random();
x=parseInt(valuerandom * 100);
console.log(x);

y=0;
for (var z =x; z <x+10000; z++) {
    function tinhsofibo() {
        if (z=== 1 || z=== 2) {
            y=z-1;
            return y;
        }
        else {
            y= (z-1) + (z-2);
            return y;
        }
    }
    console.log(y);
}




