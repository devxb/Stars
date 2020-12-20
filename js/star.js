
// 별

export function makeStars(starNum){
    let StarCanvas = document.createElement("div");
    StarCanvas.style.position = "absolute";
    StarCanvas.style.width = window.innerWidth;
    StarCanvas.style.height = window.innerHeight;
    let starSize = [];
    for(let i = 1; i < 50; i++){
        starSize.push(1);
    }
    for(let i = 1; i < 43; i++){
        starSize.push(2);
    }
    for(let i = 1; i <= 5; i++){
        starSize.push(3);
    }
    for(let i = 1; i <= 2; i++){
        starSize.push(4);
    }
    for(let i = 1; i <= 700; i++){
        let Star = {
            canvas : document.createElement("canvas"),
            starColor : ["rgb(255,255,255)", "rgb(115,137,166)", "rgb(247,241,226)"],
            set : function(starSize){
                this.canvas.width = starSize*4;
                this.canvas.height = starSize*4;
                this.canvas.style.position = "absolute";
                let ctx = this.canvas.getContext('2d')
                ctx.fillStyle = this.starColor[Math.floor(Math.random() * 3)];
                let Alpha = 0.2;
                let minAlpha = 0.3;
                let maxAlpha = 0.5;
                let shine = true;
                let Size = starSize;
                let Time = Math.floor(Math.random() * 5000) + 3000;
                console.log(Time);
                ctx.clearRect(0,0,starSize*3,starSize*3);
                ctx.globalAlpha = Alpha;
                for(let radius = 1; radius <= Size; radius++){
                    ctx.beginPath();
                    ctx.arc(starSize*2,starSize*2,radius + Alpha, 0, Math.PI*2, true);
                    ctx.fill();
                }
                Size += 1;
                let make = setInterval(function(){
                    ctx.clearRect(0,0,starSize*4,starSize*4);
                    ctx.globalAlpha = Alpha;
                    for(let radius = 1; radius <= Size; radius++){
                        ctx.beginPath();
                        ctx.arc(starSize*2,starSize*2,radius + Alpha, 0, Math.PI*2, true);
                        ctx.fill();
                    }
                    if(shine == true){
                        Size += 1;
                        if(Size >= starSize + 1){
                            shine = false;
                        }
                    } 
                    else if(shine == false){
                        Size -= 1;
                        if(Size <=starSize){
                            shine = true;
                        }
                    }
                    if(starSize <= 1){
                        clearInterval(make);
                    }
                }, Time);
            }
        };

        let X = Math.floor(Math.random() * window.innerWidth);
        let Y = Math.floor(Math.random() * window.innerHeight);
        Star.set(starSize[Math.floor(Math.random() * 100)]);
        Star.canvas.style.marginTop = Y + "px";
        Star.canvas.style.marginLeft = X + "px";
        Star.canvas.style.backgroundColor = "rgba(0,0,0,0)";
        StarCanvas.appendChild(Star.canvas);
    }
    return StarCanvas;
}
