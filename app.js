


gsap.from(".img", {
    y: -100,
    duration: 2,
    delay: 1,
    scale: 0,
    scrollTrigger: {
        trigger: ".img",
        scroller: "body",
        scrub: 2
    }

})

gsap.from(".text", {
    y: -100,
    duration: 2,
    delay: 1,
    scale: 0,
    scrollTrigger: {
        trigger: ".img",
        scroller: "body",
        scrub: 2
    }

})

