let main = document.querySelector(".main")
let box = document.querySelector(".box")

main.addEventListener("mousemove",(e)=>{
    gsap.to(box,{
        x:e.x,
        y:e.y,
     

    })
})