// gsap.from(".page1 .box1",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     borderRadius:50,

// })
// gsap.from(".page2 .box1",{
//     scale:0,
//     delay:3,
//     duration:2,
//     rotate:360,
//     borderRadius:50,

// })

// second try

// gsap.from('.page2 .box1',{
//     scale:0,
//     delay:1,
//     duratio:8,
//     rotate:1460,
//     scrollTrigger:{
//         trigger:".page2 .box1",
//         scroller:"body",
//         markers:"true",
//         start:"top 60%",
//         // scrub:"ture"
//         scrub:5,
//         pin:true
//     }


// } )

gsap.to('.page2 h1',{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})
