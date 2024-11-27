
gsap.from("#box1 .box", {
    opacity: 0,
    scale: -1,
    duration: 1,
    rotate: 360,
  });
  
  
  gsap.from("#box2 .box", {
    opacity: 0,
    scale: -1,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
      trigger: "#box2 .box", 
      scroller: "body",
      markers: true,
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    //   pin:true
    },
  });
  gsap.from("#box3 .box", {
    opacity: 0,
    scale: -1,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
      trigger: "#box3 .box", 
      scroller: "body",
      markers: true,
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    //   pin:true
    },
  });
  