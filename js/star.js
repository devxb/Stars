
// 별

let StarCanvas = document.createElement("div");
let Stars = [];

export function makeStars(starNum, W, H){
    StarCanvas = document.createElement("div");
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
        starSize.push(5);
    }
    for(let i = 1; i <= starNum; i++){
        let Star = {
            canvas : document.createElement("canvas"),
            starColor : ["rgb(255,255,255)", "rgb(115,137,166)", "rgb(247,241,226)"],
            starOpacity : [0.2,0.3],
            Size: 0,
            set : function(starSize){
                this.canvas.width = starSize*6;
                this.canvas.height = starSize*6;
                this.canvas.style.position = "absolute";
                let ctx = this.canvas.getContext('2d')
                ctx.fillStyle = this.starColor[Math.floor(Math.random() * 3)];
                let Time = Math.floor(Math.random() * 5000) + 3000;
                let Opacity = this.starOpacity[Math.floor(Math.random() * this.starOpacity.length)];
                let shine = (Opacity / starSize);
                let size = starSize*2;
                let Check = new Boolean(true);
                let make = setInterval(() =>{
                    let Optemp = Opacity;
                    ctx.clearRect(0,0,starSize*6,starSize*6);
                    for(let radius = 1; radius <= size; radius++){
                        ctx.globalAlpha = Optemp;
                        ctx.beginPath();
                        ctx.arc(starSize*3,starSize*3,radius,0,Math.PI*2,false)
                        ctx.fill();
                        Optemp -= shine;
                    }
                    if(starSize <= 2){
                        clearInterval(make);
                    }
                    if(Check == true){
                        size = size + 1;
                        if(size >= starSize * 3){
                            Check = false;
                        }
                    }
                    else{
                        size = size - 1;
                        if(size <= starSize){
                            Check = true;
                        }
                    }
                },Time);
            }
        };
        let X = Math.floor(Math.random() * W);
        let Y = Math.floor(Math.random() * H);
        let S = starSize[Math.floor(Math.random() * 100)];
        Star.Size = S*6;
        Star.set(S);
        Star.canvas.style.marginTop = Y - (S*6/3) + "px";
        Star.canvas.style.marginLeft = X - (S*6/3) + "px";
        Star.canvas.style.backgroundColor = "rgba(0,0,0,0)";
        Stars.push(Star);
        if(Star.Size >= 5*6){
            console.log("add!");
            addE(Star);
        }
        if(Star.Size >= 5*6){
            Star.canvas.style.backgroundColor = "rgba(125,0,0,1)";
            Star.canvas.style.stroke = "rgb(255,255,255)";
            Star.canvas.style.strokeWidth = "1px";
        }
        StarCanvas.appendChild(Stars[i-1].canvas);
    }
    return StarCanvas;
}


function addE(Star){
    Star.canvas.addEventListener("mousedown",(e) => {
        let downX = e.clientX;
        let downY = e.clientY;
        console.log(downX, downY);
        let a = Star.canvas.addEventListener("mousemove",(e) =>{
            let moveX = e.clientX;
            let moveY = e.clientY;
            Star.canvas.style.marginLeft = moveX - (Star.Size/2) + "px";
            Star.canvas.style.marginTop = moveY - (Star.Size/2) + "px";
            console.log(Star.canvas.style.marginLeft, Star.canvas.style.marginTop);
            Star.canvas.addEventListener("mouseup",() =>{
                Star.canvas.removeEventListener("mousemove",a);
            });
        });
    });
}

// function getmove(e, Star){
    
//     Star.canvas.removeEventListn
// }