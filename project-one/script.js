
  
  gsap.to(".image-cart",{
    transform:'translateX(-70%)',
    scrollTrigger:{
        trigger:".image-cart",
        scroller:'body',
        start:'top 55%',
        end:'top -100%',
        scrub:true
    }
})

