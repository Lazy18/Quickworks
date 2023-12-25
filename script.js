

function cursorEffect(){
    var page1Content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove",function(dets){
     gsap.to(cursor,{
        x:dets.x,
        y:dets.y
     })
})

page1Content.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
      scale:1,
      opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
       scale:0,
       opacity:0
    })
})

}
cursorEffect()

function SliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        }
      });
}
SliderAnimation()




var tl = gsap.timeline()

tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to(".loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1
})
tl.to(".loader",{
    opacity:0
})
tl.from(".page1-content  span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
    })
tl.to(".loader",{
    display:"none"
})





