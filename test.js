  var myLotto = [];
var aryLotto = [];
var idx = 0;
 
for (var i = 1; i < 10; ++i) aryLotto.push(i)  
 
while (myLotto.length < 6){
    idx = Math.floor(Math.random()*aryLotto.length);
    myLotto.push(aryLotto[idx]);
    aryLotto.splice(idx,1);
}

console.log(myLotto);