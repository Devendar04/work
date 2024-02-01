function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    gsap.from("#a a", {
        scrollTrigger: {
            trigger: "#a ",
            scroller: "#main",
            scrub: 2,
            start: "0% 0%",
            end: "100% 50%",
            onUpdate: self => console.log(self.direction)
        },
        x: -370,
        transform: "right ",
        duration: 1,
        delay: 0.2,

        ease: "exp0.out"
    }, 'lo');


    gsap.to("#a .op", {
        scrollTrigger: {
            trigger: "#a ",
            scroller: "#main",
            scrub: 1,
            start: "top 0%",
            end: "100% 50%",
            onUpdate: self => console.log(self.direction)
        },

        opacity: 0,
        ease: "exp0.out"
    });
    gsap.from("#a ion-icon", {
        scrollTrigger: {
            trigger: "#a ",
            scroller: "#main",
            scrub: 2,
            start: "top 0%",
            end: "100% 50%",
            onUpdate: self => console.log(self.direction)
        },
        rotation: -180,
        // transform: "right ", 
        duration: 1,
        delay: 0.2,
        ease: "exp0.out"
    }, 'lo');
    gsap.to(".nav , .nav a, .nav svg path", {
        scrollTrigger: {
            trigger: ".nav ",
            scroller: "#main",
            scrub: 1,
            start: "897% 20.9%",
            onUpdate: self => console.log(self.direction)
        },
        color: "white",
        fill: "white",
        ease: "exp0.out"
    }, 'lo');
    gsap.from(".nav , .nav a, .nav svg path ", {
        scrollTrigger: {
            trigger: ".nav ",
            scroller: "#main",
            scrub: 1,
            start: "1950% 50%",
            onUpdate: self => console.log(self.direction)
        },
        color: "black",
        fill: "black",
        ease: "exp0.in"
    }, 'lo');


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco()


function loader() {
    var tl = gsap.timeline()
    tl.to(".yellow1", {
        top: "-100%",
        delay: 0.3,
        duration: 0.5,
        ease: "expo.out"
    }, 'hu')
    tl.from(".yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.5,
        ease: "expo.out"
    }, "hi")
    tl.from(".nav2", {
        top: "-100%",
        delay: 0.3,
        duration: 1,
        ease: "expo.out"
    }, 'hu')
    tl.to(".nav2", {
        display: "none"
    }, 'gf')
    tl.from(".main-footer2", {
        bottom: "-100%",
        delay: 0.3,
        duration: 1,
        ease: "expo.out"
    }, 'hu')
    tl.to(".main-footer2", {
        display: "none"
    }, 'gf')
    tl.to(".loader h1", {
        delay: 0.6,
        color: "black"
    }, 'hi')
    tl.to(".nav2 , .nav2 a, .nav2 svg path", {
        delay: 0.6,
        color: "black",
        fill: "black"
    }, 'hi')
    tl.to(".main-footer2 ,.main-footer2 h2 ", {
        delay: 0.6,
        color: "black"
    }, 'hi')


    tl.to(".loader", {

        display: "none"
    }, 'gf')
    // tl.to(".loader", {
    //     opacity: 0
    // })


}
loader()




const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector(".main-footer ion-icon").addEventListener("click", () => {
    scroll.scrollTo(586)
})
document.querySelector(".upper h2").addEventListener("click", () => {
    scroll.scrollTo(0)
})


var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector(".page2")
elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimg = ele.getAttribute("data-image")
        page2.style.backgroundImage = `url(${bgimg})`
    })

})




