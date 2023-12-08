

function CopyToClipboard(){
var r = document.createRange();
r.selectNode(document.getElementById('OutputP1'));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

function writeOutput(outText, part){
    if(part == 1){
        document.getElementById('OutputP1').innerHTML = outText
    }else if(part == 2){
        document.getElementById('OutputP2').innerHTML = outText
    }
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
function manageFileDrop(content, fileName){
    const arrContent = content.split(/\r?\n|\r|\n/g)
    const DayRegex = /(\d+)/g
    const day = fileName.match(DayRegex)
    switch(day[0]){
        case "1":
            doDay1_1(arrContent)
            doDay1_2(arrContent)
            break;
        case "2":
            doDay2_1(arrContent)
            doDay2_2(arrContent)
            break;
        default:
            console.log("unknown day")
    }
}

function doDay1_1(input){
    var regex = /\d/g;
    sum = 0
    console.log(input)
    //input = getInput("1")
    input.forEach(element => {
        console.log(element)
        const matches = String(element).match(regex);
        const firstDigit = matches[0];
        const lastDigit = matches[(matches.length-1)];
        const lineNumber = Number(firstDigit+lastDigit);
        sum += lineNumber
    });
    writeOutput(sum, 1)
}
function doDay1_2(input){
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
    //input = getInput("1");
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
    writeOutput(sum, 2)
}

function doDay2_1(input){
    const rCubes = 12
    const gCubes = 13
    const bCubes = 14
    const inputRegex = /^Game (\d+): (.*)$/
    const gameRegex = /(\d+) (.*)$/
    var IDsum = 0
    console.log("Start Part 1")
    input.forEach(element =>{
        let tooHigh = false
        let matches = String(element).match(inputRegex) 
        let gameID = Number(matches[1])
        let drawings = matches[2]
        let arrDrawings = drawings.split(';').map(function(item) {
            return item.trim();
          });
        for(let i = 0; i<arrDrawings.length;i++){
            var countR = 0
            var countG = 0
            var countB = 0
            member = arrDrawings[i]
            let  arrCurrDrawing = member.split(',').map(function(item) {
                return item.trim();
              });
            arrCurrDrawing.forEach(draw => {
                let matches = draw.match(gameRegex)
                switch(matches[2]){
                    case "green":
                        countG += Number(matches[1])
                        break
                    case "blue":
                        countB += Number(matches[1])
                        break
                    case "red":
                        countR += Number(matches[1])
                        break
                    default:
                }
                if(countG > gCubes || countB > bCubes || countR > rCubes){
                    tooHigh = true
                }
            })
            if(tooHigh){break}
        };
        if(!tooHigh){
            IDsum += gameID
        }
    })
    writeOutput(IDsum, 1)  
    console.log("Part 1 done")
}

function doDay2_2(input){
    const inputRegex = /^Game (\d+): (.*)$/
    const gameRegex = /(\d+) (.*)$/
    var IDsum = 0
    console.log("Start Part 2")
    input.forEach(element =>{
        var minR = 0
        var minG = 0
        var minB = 0
        let matches = String(element).match(inputRegex) 
        let drawings = matches[2]
        let arrDrawings = drawings.split(';').map(function(item) {
            return item.trim();
          });
        for(let i = 0; i<arrDrawings.length;i++){
            member = arrDrawings[i]
            let  arrCurrDrawing = member.split(',').map(function(item) {
                return item.trim();
              });
            arrCurrDrawing.forEach(draw => {
                let matches = draw.match(gameRegex)
                switch(matches[2]){
                    case "green":
                       if(minG<Number(matches[1])){
                            minG = Number(matches[1])
                       }
                        break
                    case "blue":
                        if(minB<Number(matches[1])){
                            minB = Number(matches[1])
                       }
                        break
                    case "red":
                        if(minR<Number(matches[1])){
                            minR = Number(matches[1])
                       }
                        break
                    default:
                }
            })

        };
        var power = minG * minB * minR
        IDsum = IDsum + power
    })
    writeOutput(IDsum, 2) 
    console.log("Part 2 done")   
}