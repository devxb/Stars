
// 천장 배경

let treeCanvas = document.createElement("div");

export function makeTree(){
    treeCanvas = document.createElement("div");
    treeCanvas.width = window.innerWidth;
    treeCanvas.height = window.innerHeight;
    treeCanvas.style.position = "absolute";

    let ctx = roofCanvas.getContext('2d');
    ctx.fillStyle 
    
    return treeCanvas;
}

function Tree(posX){
    let canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    let ctx = canvas.getContext('2d');
    ctx.moveTo(posX, window.innerHeight);
    let start = setInterval(function(){
        ctx.beginPath();
    }, 1);

}

function draw(A, B, width, VecX, VecY){

}