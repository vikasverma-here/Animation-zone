
var path = `M 10 100 Q 250 100 900 100`

let string = document.querySelector(".string")
string.addEventListener("mousemove",(dets)=>{
    var path = `M 10 100 Q 250 ${dets.y} 900 100`
   gsap.to("svg path",{
    attr: {d: path}
   })

})
