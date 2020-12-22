
// 천장 배경

let treeCanvas = document.createElement("div");
let tree = document.createElement("canvas");

export function makeTree(){
    treeCanvas.style.width = window.innerWidth;
    treeCanvas.style.height = window.innerHeight;
    treeCanvas.style.position = "absolute";
    tree.width = window.innerWidth;
    tree.height = window.innerHeight;
    tree.style.position = "absolute";
    DrawTree(10, window.innerHeight, 0, -1, window.innerWidth / 20);
    return treeCanvas;
}

function DrawTree(X, Y, dirX, dirY, Width){
    let ctx = tree.getContext('2d');
    ctx.fillStyle = "rgba(0,0,0)";
    
}