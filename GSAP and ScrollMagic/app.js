const flightPath = {
    curviness: 1.25 ,
    autoRotate: true, 
    values:[
        {x:100,y:-20},{x: 300,y: 10},{x: 500,y: 100},
        {x: 800,y: 300},{x: 900,y: -100},{x: 800,y: -300},
        {x: 800,y: 300},{x: 950,  y: 300},{x: 1500,y: -50},
        {x:800,y:-100},{x:1500,y: -50},{x:window.innerWidth , y: -250}
       
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 30, {
        bezier: flightPath,
        ease : Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 900,
    triggerHook: 0
})
.setTween(tween)
.setPin(".animation")
.addIndicators()
.addTo(controller);