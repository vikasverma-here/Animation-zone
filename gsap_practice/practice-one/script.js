// gsap.from("h1",{
//     opacity:0,
//     y:100,
//     duration:1,
//     delay:1,
//     stagger:1,
   
// })



// !!! part two 

// gsap.to("#box",{
//     x:300,
//    y:300,
//    duration:2,
//    delay:1,
//    borderRadius:100,
//    backgroundColor:"white",
// border:"5px solid green",
// repeat:6,
// yoyo:true,
// scale:1.5,
// rotate:100,

// })    


// !!! part three

let  tl = gsap.timeline()
tl.from(".logo h1",{
    y:-20,
    duration:1,
    delay:1,
    opacity:0
})
tl.from(".items h2",{
    y:-20,
    duration:0.4,
 
    stagger:1,
    opacity:0
})
tl.from(".center h1",{
    y:-40,
   opacity:0,
   
   scale:0.2
})