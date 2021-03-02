let content = document.querySelector("p");
let leng;
let punc;
let comma;
let start;
let end;

// let totalChar = 258851464;

function createString(x, punc, comma, start, end) {
    let newString = "";
    let totalChar = 0;
    for (i = start; i < end; i++) {
        totalChar += hanArray[i][1];
    }
    for (i = 0; i < x; i++) {
        for (j = start; j < end; j++) {
            if (Math.random() < hanArray[j][1] / totalChar) {
                newString += hanArray[j][0];
            }
        }
        if (
            newString.length > 4
            &&
            newString[newString.length - 1] !== "，"
            &&
            newString[newString.length - 1] !== "。"
            &&
            newString[newString.length - 2] !== "，"
            &&
            newString[newString.length - 2] !== "。"
            &&
            Math.random() < punc
        ) {
            if (Math.random() < comma) {
                newString += "，";
            } else {
                newString += "。";                
            }
        }
    }
    if (
        newString[newString.length - 1] === "，"
        ||
        newString[newString.length - 1] === "。"
    ) {
        newString = newString.slice(0, -1);
    }
    newString += "。";

    return newString;
}

function checkInput() {
    leng    = parseInt(document.getElementById("length").value);
    punc    = parseFloat(document.getElementById("punc").value);
    comma   = parseFloat(document.getElementById("comma").value);
    start   = parseInt(document.getElementById("start").value);
    end     = parseInt(document.getElementById("end").value);
    if (isNaN(leng)) leng = 1000;
    if (isNaN(punc)) punc = 0.2;
    if (isNaN(comma)) comma = 0.8;
    if (isNaN(start)) start = 0;
    if (isNaN(end)) end = 3000;
}

document.getElementById("generate").addEventListener("click", generate);
document.getElementById("append").addEventListener("click", append);
// document.querySelector("input").addEventListener("onHover", showAltText);

// function showAltText() {
//     leng = 1;
// }

function generate() {
    checkInput();
    content.textContent = createString(
        leng,
        punc,
        comma,
        start,
        end
    );
}

function append() {
    // console.log(createString(1000, 0.1, 0.8));
    // content.textContent = createString(1000, 0.1, 0.8);
    // let para = ;
    generate();
    document.querySelector("body").appendChild(
        document.querySelector("p").cloneNode(true)
    );

}