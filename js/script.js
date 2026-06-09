constsound=document.getElementById("keysound");
    document.querySelectorAll(".key"). forEach(key=>{
        key.addEventListener("click", () => {
            sound.currentTime=0;
            sound.play();
            key.classList.add("active");

            setrTimeout(() =>{
                key.classList.remove("active");
            } ,150);
         });
        });
