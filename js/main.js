// Time
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dat = new Date()
let day = weekday[dat.getDay()];

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

// Pin Code
    var code = ''
    const correct_code = '2023'

    function add_number(x){
        if(code.length !== 4){
            document.querySelectorAll('.code span')[code.length].classList.add('active')
            code += x.innerHTML
            if(code.length == 4){
                if(code == correct_code){
                    setTimeout(()=>{
                        code='';
                        for(i=0;i<4;i++){
                            document.querySelectorAll('.code span')[i].classList.remove('active')
                            document.querySelector('.code').classList.remove('invaild')
                        }
                        document.querySelector('.screen-lock').classList.add('open')
                        setTimeout(()=>{document.querySelector('.screen-lock').style.display = 'none'},500)
                    },500)
                }else{
                    document.querySelector('.code').classList.add('invaild')
                    setTimeout(()=>{code='';
                    for(i=0;i<4;i++){
                        document.querySelectorAll('.code span')[i].classList.remove('active')
                        document.querySelector('.code').classList.remove('invaild')
                    }},500)
                }
            }
        }
    }




document.querySelector('.watch').innerHTML = time('hour') + ":" + time("minute")
document.querySelector('.date h3').innerHTML = day + " " + dat.getDate()
