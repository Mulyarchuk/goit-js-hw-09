const start = document.querySelector(`button[data-start]`);
const stop = document.querySelector(`button[data-stop]`);

const changer = {
    intervalID: null,
    isActive: false,
    start(){
        if (this.isActive){
            return;
        }
        this.isActive = true;
        this.intervalID = setInterval(()=>{
            const randomColor = getRandomHexColor();
            document.body.style.backgroundColor = randomColor;
            
        },1000);
    },
    stop(){
        clearInterval(this.intervalID);
        this.isActive = false;

    }
}

start.addEventListener(`click`, ()=>{
    changer.start();
    if(changer){
        start.disabled = true;
        stop.disabled = false;
    }
    
});


stop.addEventListener(`click`, ()=>{
    changer.stop();
    if(changer){
        stop.disabled = true;
        start.disabled = false;
    }
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
