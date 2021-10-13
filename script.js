gsap.registerPlugin(ScrollTrigger);

const artists = gsap.utils.toArray(".artist");

artists.forEach((element, index) => {
  let items = element.querySelectorAll(":scope > *");
  let distance = index % 2 == 0 ? -100 : 100;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 50%",
      toggleActions: "restart none none reverse",
    },
  });

  tl.from(items, {
    duration: 0.5,
    xPercent: gsap.utils.wrap([-distance, distance]),
  });
  tl.from(items, { opacity: 0, duration: 0.3 }, 0);
});
