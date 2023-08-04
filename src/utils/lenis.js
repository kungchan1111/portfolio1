/* eslint-disable no-console */
/* eslint-disable no-shadow */
import Lenis from "@studio-freight/lenis";

function lenis() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", (e) => {
    console.log(e);
  });
}

export default lenis;