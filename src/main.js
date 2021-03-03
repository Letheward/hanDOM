let lengPara;
let lengSen;

let punc;
let period;
let comma;
let semicolon;
let question;
let exclamation;

let start;
let end;

function checkInput() {
    lengPara    = parseInt(document.getElementById("lengPara").value);
    lengSen     = parseInt(document.getElementById("lengSen").value);
    punc        = parseFloat(document.getElementById("punc").value);
    period      = parseFloat(document.getElementById("period").value);
    comma       = parseFloat(document.getElementById("comma").value);
    semicolon   = parseFloat(document.getElementById("semicolon").value);
    question    = parseFloat(document.getElementById("question").value);
    exclamation = parseFloat(document.getElementById("exclamation").value);
    start       = parseInt(document.getElementById("start").value);
    end         = parseInt(document.getElementById("end").value);
    if (isNaN(lengPara)) lengPara = 500;
    if (isNaN(lengSen)) lengSen = 6;
    if (isNaN(punc)) punc = 0.2;
    if (isNaN(period)) period = 0.3;
    if (isNaN(comma)) comma = 0.5;
    if (isNaN(semicolon)) semicolon = 0.1;
    if (isNaN(question)) question = 0.1;
    if (isNaN(exclamation)) exclamation = 0.1;
    if (isNaN(start)) start = 0;
    if (isNaN(end)) end = 3000;
}

// let totalChar = 258851464;

function createString() {

    let newString = "";
    let totalChar = 0;

    for (i = start; i < end; i++) {
        totalChar += hanArray[i][1];
    }

    for (i = 0; i < lengPara; i++) {
        for (j = start; j < end; j++) {
            if (Math.random() < hanArray[j][1] / totalChar) {
                newString += hanArray[j][0];
            }
        }
        if (
            newString.length > lengSen
            &&
            !newString.slice(-lengSen).includes("。")
            &&
            !newString.slice(-lengSen).includes("，")
            &&
            !newString.slice(-lengSen).includes("；")
            &&
            !newString.slice(-lengSen).includes("？")
            &&
            !newString.slice(-lengSen).includes("！")
            &&
            Math.random() < punc
            &&
            !(lengPara - i < lengSen + 2)
            ||
            i === lengPara - 1
        ) {
            if (Math.random() < period) {
                newString += "。";
            } else if (Math.random() < comma) {
                newString += "，";
            } else if (Math.random() < semicolon) {
                newString += "；";
            } else if (Math.random() < question) {
                newString += "？";
            } else if (Math.random() < exclamation) {
                newString += "！";
            }
        }
    }

    if (
        newString.slice(-1) === "，"
        ||
        newString.slice(-1) === "；"
    ) {
        newString = newString.slice(0, -1);
        newString += "。";
    } else if (
        !"。，；？！".includes(newString.slice(-1))
    ) {
        newString += "。？！"[parseInt(Math.random() * 3)];
    }

    return newString;
}

document.getElementById("generate").addEventListener("click", generate);
document.getElementById("append").addEventListener("click", append);
document.getElementById("clear").addEventListener("click", clear);

function generate() {
    checkInput();
    document.querySelector("p").textContent = createString();
}

function append() {
    generate();
    document.getElementById("content2").appendChild(
        document.querySelector("p").cloneNode(true)
    );
}

function clear() {
    let g = document.getElementById("content2");
    while (g.hasChildNodes()) {
        g.removeChild(g.firstChild);
    }
}