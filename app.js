if(navigator){
    navigator.getBattery()
    .then(status=>{
        console.table(status);
        Charging(status.charging);
        BatteryLevel(status.level);

        status.onCharging = () => Charging(status.charging);
        status.onLevelChange = () => BatteryLevel(status.level);
    })
}
else{
    alert('Sorry your browser dosen\'t support the navigator object');
}

let level = document.querySelector(".level");
let text = document.querySelector(".text");
function Charging(status){
    if(status){
    level.classList.add("charging");
    text.innerHTML = "Charging ";
    }
    else{  
    level.classList.remove("charging");
    }
}

function BatteryLevel(value) {
    text.append(value*100+'%') ;
    level.style.height = value*100+'%' ;
}