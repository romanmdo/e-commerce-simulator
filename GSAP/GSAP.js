gsap.from('.hijo', {
    scrollTrigger: {
        trigger: '.hijo',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none', 
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out'
});

gsap.from('.hijo2', {
    scrollTrigger: {
        trigger: '.hijo2',
        start: 'top 80%',
        end: 'bottom 20%', 
        toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out'
});