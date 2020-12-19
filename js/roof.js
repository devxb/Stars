
// 천장 배경

export function makeRoof(){
    let roofCanvas = document.createElement("canvas");
    roofCanvas.width = window.innerWidth;
    roofCanvas.height = window.innerHeight;
    roofCanvas.style.position = "absolute";
    let ctx = roofCanvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(window.innerWidth/2, window.innerHeight/2, window.innerWidth / 4,0,Math.PI*2, true);
    ctx.clip();
    ctx.fillStyle = "rgba(255,255,255,0)";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    return roofCanvas;
}