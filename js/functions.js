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
            document.querySelector('.screen').classList.add('active')
            setTimeout(()=>{stat.lock = true},500)

            document.querySelector('.enterance').classList.remove('active')

            document.querySelector('.screen-lock').classList.remove('open')
            document.querySelector('.screen-lock').style.display = 'block'
        }
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