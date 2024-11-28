
const initial = "M 10 100 Q 500 100 990 100"
const final ="M 10 100 Q 500 100 990 100"

let box =document.getElementById("box")
box.addEventListener("mousemove",(dets)=>{
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })

})
box.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:final},
        duration:0.5,
        ease:"elastic.out(1,0.2)"
    })

})