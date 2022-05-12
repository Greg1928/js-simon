/* FUNCTIONS */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


/* MAIN */  


let random = [];
let correct = [];
let wrong = [];
count = 0;

while (random.length < 5){
    let n = getRndInteger(1, 100);
    if (random.includes(n)===false){
        random.push(n);
    }
}

document.querySelector("#random").innerHTML = random;


setTimeout(function() {
    document.querySelector("#random").classList.add("none");

}, 30000);

setTimeout(function() {
    for(let i = 0; i<5; i++){
        let x = Number(prompt("Enter the correct numbers"));
        if(random.includes(x)){
            correct.push(x);
            count++;
        }else{
            wrong.push(x);
        }

    }
    alert("You have identified " + count + " numbers: \n" + correct + "\n\n\nWrong numbers entered: \n" + wrong);
}, 30500);