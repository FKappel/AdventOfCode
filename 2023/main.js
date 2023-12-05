function CopyToClipboard()
{
var r = document.createRange();
r.selectNode(document.getElementById('Output'));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

function writeOutput(outText){
    document.getElementById('Output').innerHTML = outText
}

function getInput(day){
    ret = prompt("input for day"+day)
    arrRet = ret.split(' ')
    return arrRet
}
/*
function doDayx_(){
    writeOutput()
}
*/
function doDay1_1(){
    var regex = /\d/g;
    sum = 0
    
    input = getInput("1")
    input.forEach(element => {
        const matches = String(element).match(regex);
        const firstDigit = matches[0];
        const lastDigit = matches[(matches.length-1)];
        const lineNumber = Number(firstDigit+lastDigit);
        sum += lineNumber
    });
    writeOutput(sum)
}
function doDay1_2(){
    var regex = /\d|one|two|three|four|five|six|seven|eight|nine/g;
    let NumberMapping = new Map([
        ["one","1"],
        ["two","2"],
        ["three","3"],
        ["four","4"],
        ["five","5"],
        ["six","6"],
        ["seven","7"],
        ["eight","8"],
        ["nine","9"],
    ]);
    sum = 0;
    input = getInput("1");
    input.forEach(element => {
        const matches = String(element).match(regex);
        var firstDigit = matches[0];
        strTest=""
        const ubound = element.length - 1
        for (let i = ubound; i>=0; i--){
            strTest = element[i] + strTest
            const matches = String(strTest).match(regex)
            if(!!matches){
                console.log(strTest)
                var lastDigit = matches[0];
                break
            }
        }
        if(isNaN(firstDigit)){
            firstDigit = NumberMapping.get(firstDigit)
        }
        if(isNaN(lastDigit)){
            lastDigit = NumberMapping.get(lastDigit)
        }
        strNumber = firstDigit+lastDigit
        var lineNumber = Number(firstDigit+lastDigit);
        console.log(element + "  -  " + lineNumber)
        sum += lineNumber;
    });
    writeOutput(sum)
}

