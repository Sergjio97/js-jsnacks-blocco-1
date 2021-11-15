// start JSnak 2

let x = (prompt("scrivi qualcosa"));

let y = (prompt("scrivi qualcosa"));

if(x.length > y.length){
console.log(x);
} else if(x.length < y.length){
console.log(y);
} else{
console.log(x + " " + y);
}

// end JSnak 2

// let a = 2;

// let b = 1000;

// let c = "";

// for (let i = 1; i < b; i++){
//     c = a;
//     if (a < b){
//         a = 2 ** i;
//         console.log(c)
//     } else{
//         ;
//     }
// }

let a = 2;

let b= 1000;

let c = "";

let i = 1;

while(i < b){
    i++;

    c = a;
    if (a < b){
        a = 2 ** i;
        console.log(c);
    } else{
        ;
    }
}





