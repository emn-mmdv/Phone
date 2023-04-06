stat = true


function power(){
    if(stat==true){
        document.querySelector('.power-down').classList.add('active')
        setTimeout(()=>{stat = false},500)
    }else{
        document.querySelector('.power-down').classList.remove('active')
        setTimeout(()=>{stat = true},500)
    }


}

const dat = new Date()
document.querySelector('.watch').innerHTML = dat.getHours() + ":" + dat.getMinutes()