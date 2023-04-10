const dat = new Date()

// Time
    function time(x){
        if(x=="minute"){
            if(dat.getMinutes().toString().length!==2){
                return "0"+dat.getMinutes()
            }else{
                return dat.getMinutes()
            }
        }else if(x=="hour"){
            if(dat.getHours().toString().length!==2){
                return "0"+dat.getHours()
            }else{
                return dat.getHours()
            }
        }
    }

document.querySelector('.watch').innerHTML = time('hour') + ":" + time("minute")