window.addEventListener("wheel",(e)=>{
if(e.deltaY>0){
    gsap.to(".mark",{
        transform:'translateX(-200%)',
        repeat:Infinity,
        ease:"none",
        duration:1
        
    })
   gsap.to(".mark img",{
    rotate:180,
    duration:1
   })
}else{
    gsap.to(".mark",{
        transform:'translateX(0%)',
        repeat:Infinity,
        ease:"none",
        duration:4
        
    })
    gsap.to(".mark img",{
        rotate:0,
        duration:1,
       })
}
})




