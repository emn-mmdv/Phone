//? Detecting items 
const item = (e) => document.querySelector(e);
const items = (e) => document.querySelectorAll(e);

//? Adding Class to items
const addClass = (e, c) => {if(typeof(e)=='string'){item(e).classList.add(c)} else{e.classList.add(c)}};
const removeClass = (e, c) => {if(typeof(e)=='string'){item(e).classList.remove(c)} else{e.classList.remove(c)}};
const toggleClass = (e, c) => {if(typeof(e)=='string'){item(e).classList.toggle(c)} else{e.classList.toggle(c)}};

const log = (e) => console.log(e);