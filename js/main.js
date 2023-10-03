//? Button animation
items('.buttons div').forEach(button => {
    button.onclick = () => {
        addClass(button, 'active')
        setTimeout(() => removeClass(button, 'active'), 300)
    }
})

function power(){
    if(stats.phone.status){
        stats.phone.status = false;
        removeClass('.screen', 'active');
    } else{
        stats.phone.status = true;
        addClass('.screen', 'active');
    }
}

//? Keyboard Shortcuts
document.body.onkeyup = (event) => {
    //! Power Button | Press P
    if(event.keyCode === 80){power();}
}