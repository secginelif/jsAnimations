const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const text2 = intro.querySelector("p");
// end section
const section = document.querySelector("section");
const end = section.querySelector("h1");


// scroll magic
const controller = new ScrollMagic.Controller();
// scene
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook:0
})

.setPin(intro)
.addIndicators()
.addTo(controller);

// text animation
const textAnim= TweenMax.fromTo(text, 4, {opacity:1}, {opacity:0});





let scene2 = new ScrollMagic.Scene({
    duration: 6000,
    triggerElement: intro,
    triggerHook: 0 
})



.setTween(textAnim)
.addTo(controller);

 
// video animation

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update",e => {
    scrollpos = e.scrollPos / 700;
    console.log(e);
});

setInterval(() => {
    delay +=  (scrollpos - delay)* accelamount;
    console.log(scrollpos,delay);

    video.currentTime = delay;
},200);