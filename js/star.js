
// 별

export function makeStars(starNum){
    let StarCanvas = document.createElement("div");
    StarCanvas.style.position = "absolute";
    StarCanvas.style.width = window.innerWidth;
    StarCanvas.style.height = window.innerHeight;
    for(let i = 1; i <= 500; i++){
        let Star = {
            canvas : document.createElement("canvas"),
            starColor : ["rgb(255,255,255)", "rgb(115,137,166)", "rgb(247,241,226)"],
            make : null,
            set : function(starSize){
                this.canvas.width = starSize*2+5;
                this.canvas.height = starSize*2+5;
                this.canvas.style.position = "absolute";
                let ctx = this.canvas.getContext('2d')
                ctx.fillStyle = this.starColor[Math.floor(Math.random() * 3)];
                console.log(Math.floor(Math.random() * 3));
                let Alpha = 0.1;
                let minAlpha = 0.2;
                let maxAlpha = 0.4;
                let shine = true;
                this.make = setInterval(function(){
                    ctx.clearRect(0,0,starSize*2+5,starSize*2+5);
                    ctx.globalAlpha = Alpha;
                    for(let radius = 1; radius <= starSize; radius++){
                        ctx.beginPath();
                        ctx.arc(starSize+1,starSize+1,radius, 0, Math.PI*2, true);
                        ctx.fill();
                    }
                    if(shine == true){
                        Alpha += 0.05;
                        if(Alpha >= maxAlpha){
                            shine = false;
                        }
                    } 
                    else if(shine == false){
                        Alpha -= 0.05;
                        if(Alpha <= minAlpha){
                            shine = true;
                        }
                    }
                }, 500);
            }
        };

        let X = Math.floor(Math.random() * window.innerWidth);
        let Y = Math.floor(Math.random() * window.innerHeight);
        Star.set(Math.floor(Math.random() * 3) + 1);
        Star.canvas.style.marginTop = Y + "px";
        Star.canvas.style.marginLeft = X + "px";
        Star.canvas.style.backgroundColor = "rgba(0,0,0,0)";
        StarCanvas.appendChild(Star.canvas);
    }
    return StarCanvas;
}
