stat = {
    'lock': false,
    'current_app': "home",
} 

// Power
    function power(){
        if(stat.lock==true){
            document.querySelector('.screen').classList.remove('active')
            setTimeout(()=>{stat.lock = false},500)
        }else{
            powerdown()
        }
    }

    function powerdown(){
        document.querySelector('.screen').classList.add('active')
        setTimeout(()=>{stat.lock = true},500)

        document.querySelector('.enterance').classList.remove('active')
    }

    function lock(){
        if(stat.lock!==false) {
            document.querySelector('.enterance').classList.add('active')
        }
    }

    

// Home button
    function home(){
        lock()
    }