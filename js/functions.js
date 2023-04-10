// Power
function power(){
    if(stat==true){
        document.querySelector('.power-down').classList.remove('active')
        setTimeout(()=>{stat = false},500)
    }else{
        powerdown()
    }
}

function powerdown(){
    document.querySelector('.power-down').classList.add('active')
    setTimeout(()=>{stat = true},500)

    document.querySelector('.enterance').classList.remove('active')
}

function lock(){
    if(stat!==false) {
        document.querySelector('.enterance').classList.add('active')
    }
}

// Home button
function home(){
    lock()
}