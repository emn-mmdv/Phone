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

// Background Image
item('.screen').style.background = `url(${stats.phone["bg-image"]}) center`

//* Auto Updating Time
d = new Date()
item('span.time').innerHTML = d.getHours() + " : " + d.getMinutes()
setInterval(() => {
    d = new Date()
    item('span.time').innerHTML = d.getHours() + " : " + d.getMinutes()
}, 60000)

switch (d.getMonth()){
    case 0:item('span.day').innerHTML = `Janruary ${d.getDate()}`;break;
    case 1:item('span.day').innerHTML = `February ${d.getDate()}`;break;
    case 2:item('span.day').innerHTML = `March ${d.getDate()}`;break;
    case 3:item('span.day').innerHTML = `April ${d.getDate()}`;break;
    case 4:item('span.day').innerHTML = `May ${d.getDate()}`;break;
    case 5:item('span.day').innerHTML = `June ${d.getDate()}`;break;
    case 6:item('span.day').innerHTML = `July ${d.getDate()}`;break;
    case 7:item('span.day').innerHTML = `August ${d.getDate()}`;break;
    case 8:item('span.day').innerHTML = `September ${d.getDate()}`;break;
    case 9:item('span.day').innerHTML = `October ${d.getDate()}`;break;
    case 10:item('span.day').innerHTML = `November ${d.getDate()}`;break;
    case 11:item('span.day').innerHTML = `December ${d.getDate()}`;break;
}
