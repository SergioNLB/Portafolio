const firstLine = "Hi, I'm Sergio Lafora";
const secondLine = " I'm full stack developer";
const thirdLine = " Are you ready to explore my portfolio?";

let firstLineIndex = 0;
let secondLineIndex = 0;
let thirdLineIndex = 0;

function writeFirstLine() {
    document.getElementById("firstLine").textContent += firstLine[firstLineIndex];
    firstLineIndex++;
    if (firstLineIndex < firstLine.length) {
        setTimeout(writeFirstLine, 100);
    } else {
        setTimeout(writeSecondLine, 100);
    }
}

function writeSecondLine() {
    document.getElementById("secondLine").textContent += secondLine[secondLineIndex];
    secondLineIndex++;
    if (secondLineIndex < secondLine.length) {
        setTimeout(writeSecondLine, 100);
    } else {
        setTimeout(writeThirdLine, 100);
    }
}

function writeThirdLine() {
    document.getElementById("thirdLine").textContent += thirdLine[thirdLineIndex];
    thirdLineIndex++;
    if (thirdLineIndex < thirdLine.length) {
        setTimeout(writeThirdLine, 100);
    }else  {
        document.getElementById("startBtn").style.display = 'block';
    }
}

window.onload = function() {
    document.getElementById("firstLine").textContent = "";
    document.getElementById("secondLine").textContent = "";
    document.getElementById("thirdLine").textContent = "";
    document.getElementById("startBtn").style.display = 'none';
    writeFirstLine();
};
