

import {makeStars} from "../js/star.js";
import {makeRoof} from "../js/roof.js";

// 배경 
let mainSheet;

window.onload = function(){
    mainSheet = document.getElementById("body");
    mainSheet.style.position = "absolute";
    setBack();
    mainSheet.appendChild(makeStars(100));
    mainSheet.appendChild(makeRoof());
}

function setBack(){
    let BackCanvas = document.createElement("canvas");
    BackCanvas.style.position = "absolute";
    mainSheet.appendChild(BackCanvas);
    BackCanvas.width = window.innerWidth;
    BackCanvas.height = window.innerHeight;

    let ctx = BackCanvas.getContext('2d');
    // ctx.fillStyle = "rgb(14,12,13)";
    // ctx.fillStyle = "rgb(1, 13, 30)";
    // "rgb(1 13 30)"
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    //R = 18 G = 25 ~ 45 B = 35 ~ 60
    let increaseG = 15 / window.innerHeight;
    let increaseB = 20 / window.innerHeight;
    let R = 5, G = 5, B = 10;
    for(let height = 0; height <= window.innerHeight; height++){
        ctx.fillStyle = "rgb(" + R + "," + G + "," + B + ")";
        ctx.strokeStyle = "rgb(" + R + "," + G + "," + B + ")";
        G = G + increaseG;
        B = B + increaseB;
        ctx.beginPath();
        ctx.fillRect(0,height,window.innerWidth,1);
    }
    
}