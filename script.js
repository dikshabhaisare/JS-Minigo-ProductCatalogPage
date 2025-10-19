var tl = gsap.timeline();
gsap.from("#nav a",{
   y: -50,
   duration:0.6,
   delay:0.3,

})
gsap.from("#nav h1",{
   y: -50,
   duration:0.6,
   delay:0.3,
})
gsap.to("#page1",{
   width:"60%",
   duration:0.7,
   delay:0.8,
   scrub:5
})
gsap.from("#page2 img",{
   scale:1.7,
   opacity:0,
   duration:1,
   delay:0.7
})
gsap.from("#page1 h1",{
    y: 150,
    delay:1.5,
    opacity:0,
    scrub:4,
    duration:1
})
gsap.from("#page1 p",{
    y: 150,
    delay:1.7,
    opacity:0,
    scrub:4,
    duration:1
})
gsap.from("#page1 button",{
    y: 150,
    delay:1.8,
    opacity:0,
    scrub:4,
    duration:1
})
gsap.from("#second h3",{
   y : 150,
   scrollTrigger:{
     trigger : "#second h3",
     scroll : "body",
     start: "top 85%", 
     end : "top -100%",
     duration:1,
     markers:true
   },
   scrub:4,
   duration:1.5,
   opacity:0
})
gsap.from("#third h2",{
   y : 100,
   scrollTrigger:{
     trigger : "#third h2",
     scroll : "body",
     start: "top 85%", 
     end : "top -100%",
     duration:1,
     markers:true
   },
   scrub:4,
   duration:0.8,
   opacity:0
})
gsap.from("#third p",{
   y : 80,
   scrollTrigger:{
     trigger : "#third p",
     scroll : "body",
     start: "top 85%", 
     end : "top -100%",
     duration:1,
     markers:true
   },
   scrub:4,
   duration:0.8,
   opacity: 0
})

