
let tl=gsap.timeline()
tl.from(".navbar .brand",{
    y:-30,
    delay:1,
    duration:1,
    opacity:0,
})
tl.from(".navbar .itmes h2",{
    y:-30,
  opacity:0,
  stagger:0.3
    
})
tl.from(".left h1",{
    x:-40,
  opacity:0,
  stagger:0.3
    
})
tl.from(".left p",{
    x:-40,
  opacity:0,
  stagger:0.3
    
})
tl.from(".left a",{
    scale:0,
  opacity:0,
  stagger:0.3

    
})
tl.from(".right img",{
    x:40,
  opacity:0,
  stagger:0.3

    
})

gsap.from(".course-card",{
  opacity:0,
  scale:0,
  y:100,
  duration:1,
scrollTrigger:{
  trigger:".courses-container .course-card",
  // markers:true,
  duration:1,
  start:"top 60%",
  end:"top 30%",
  scrub:2,
  
},


})

// gsap.from(".courses-section h1",{
//   opacity:0,
//   y:-100,
// scrollTrigger:{
//   trigger:'.courses-section ',
//   markers:true,
//   start:"top 60%",
//   end:"top 30%",
//   scrub:2,
// }  

// })
