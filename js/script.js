const dino = document.querySelector('.dino');
const background=document.querySelector('.fundo-cenario');
let isjump=false;
let position = 0;
function handKeyUp(event) {
    if (event.keyCode === 32) {
        if(!isjump){
        jump();
        }
    }
}
function jump() {
   
    isjump=true;
    let upinterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upinterval);
            //para descer
            let downinterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downinterval);
                    isjump=false;
                } else{
                    position -= 15;
                dino.style.bottom = position + 'px';
            }
            }, 15); 
            //--
} else {
    position += 15;
    dino.style.bottom = position + 'px';
}
    }, 15 );
}

function createCactos(){
    const cactos=document.createElement('div');
    let cactosPosition=1000;
    let randomCactos=Math.random() * 6000;
    cactos.classList.add('cactos');
    cactos.style.left=1000+'px';
    background.appendChild(cactos);

    let leftinterval = setInterval(() => {
        cactosPosition-=5;
        cactos.style.left=cactosPosition +'px';

        if(cactosPosition <-60){
            clearInterval(leftinterval);
            background.removeChild(cactos);
        }else if(cactosPosition > 0 && cactosPosition < 60 && position<60){
            clearInterval(leftinterval);
            document.body.innerHTML='<h1 class="game-over">Game Over</h1>';
        }else{
            cactosPosition-=5;
            cactos.style.left=cactosPosition +'px';
        }

    }, 15);
    setTimeout(createCactos,randomCactos);
}
createCactos();
document.addEventListener('keyup', handKeyUp);