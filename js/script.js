const sound= document.getElementById("fil");
console.log(sound);
constsound= document.getElementById("fil");
    document.querySelectorAll(".key"). forEach(key=>{
        key.addEventListener("click", () => {
            sound.currentTime=0;
            sound.play();
            key.classList.add("active");

            setrTimeout(() => {
                key.classList.remove("active");
            } ,150);
         });
 });
