document.addEventListener("keydown", function(Event) {
    let key= Event.key.toUpperCase();
    let box= document.querySelector( `[data-key="${key}"]`);
    let text= document.getElementById("text");
    let ljud= document.getElementById("ljud");
     
    if(text) {
        text.textContent =key;
        box.classList.add("active");
    }
    if (ljud) {
        ljud.currentTime =0;
        ljud.play();
    }
});    

document.addEventListener("keyup",function(Event) {
    let key= Event.key.toUpperCase();
let box= document.querySelector(` [data-key="${key}"]`);
if (box) {
box.classList.remove("active");
}
        
}); 
document.addEventListener("keydown", function(Event) {
    let ljud= document.getElementById("ljud");
    ljud.currentTime= 0;
    ljud.play();
});