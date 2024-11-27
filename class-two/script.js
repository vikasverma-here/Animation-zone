
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