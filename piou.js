
function angry_birds(num) {
    let i   = 0;
    let str = "";
    while (i<num) {
        str += "piou "
        i++;
    };
    console.log(str);
}

angry_birds(5);



function angry(num) {
    let str = "";
    for (let i=0; i<num; i++) {
        str += "piou ";
    }
    return str;
}
console.log(angry(5));


function repeteur(n) {return n === 0 ? "" : "piou " + repeteur(n-1)}

console.log(repeteur(5));