
function locoAnimation(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
locoAnimation();

gsap.to(".svg-block svg",{
  transform:"translateY(-100%)",
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 0",
    end:"top -5%",
    scrub:true,



  }

})

function mouseMove(){
  let mouse=document.querySelector(".play");
let cont=document.querySelector("#video-cont");

cont.addEventListener("mouseenter",function(){
  gsap.to(mouse,{
        opacity: 1,
        scale:1,
  })
})

cont.addEventListener("mouseleave",function(){
  gsap.to(mouse,{
        opacity: 0,
        scale:0,
  })
})
cont.addEventListener("mousemove",function(dets){
  gsap.to(mouse,{
      top:dets.y-80,
      left:dets.x-70,
  })
})


}
mouseMove();
function videoanime(){
  
gsap.from("#page1 h1",{
  y:100,
  opacity:0,
  delay:0.5,
  stagger:0.4,
  duration:0.5
})
gsap.from("#page1 #video-cont",{
scale:0.6,
  opacity:0,
  delay:1.3,
  duration:0.9
})
}
videoanime();

document.addEventListener("mousemove",function(dets){
  gsap.to(".mouse",{
    top:dets.y,
    left:dets.x,
    scale:1.3,
  })
})