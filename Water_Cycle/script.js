const restartBtn = document.getElementById("restart");
const pausePlayBtn = document.getElementById("pause-play");

var tl = gsap.timeline({ repeat: -1 });

tl.to("#sun", { y: -52, opacity: 1, duration: 3, ease: "power2.inout" });
tl.to("#evaporation", {
  opacity: 1,
  transform: "translateY(0)",
  duration: 0.5,
  delay: 0.5,
  ease: "power2.inout" });

tl.to("#evaporation", { opacity: 0, duration: 0.5, delay: 5 });
tl.to("#cloud-1", {
  opacity: 1,
  transform: "translate(-40px, 52px)",
  duration: 1,
  delay: 1,
  ease: "power2.inout" });

tl.to("#cloud-2", {
  opacity: 1,
  transform: "translate(56px, -19px);",
  duration: 1,
  delay: 0.25,
  ease: "power2.inout" });

tl.to("#condensation", {
  opacity: 1,
  transform: "translateY(0)",
  duration: 0.5,
  delay: 0.5,
  ease: "power2.inout" });

tl.to("#condensation", {
  opacity: 0,
  duration: 1,
  delay: 5,
  ease: "power2.inout" });

tl.to("#rain-clouds", {
  opacity: 1,
  duration: 2,
  delay: 1,
  ease: "power2.inout" });

tl.to("#sun", { opacity: 0 });
tl.to("#cloud-1", { opacity: 0 });
tl.to("#cloud-2", { opacity: 0 });
tl.to("#precipitation", {
  opacity: 1,
  transform: "translate(0)",
  duration: 0.5,
  delay: 0.5,
  ease: "power2.inout" });

tl.to("#precipitation", {
  opacity: 0,
  duration: 0.5,
  delay: 5,
  ease: "power2.inout" });

tl.to("#runoff", {
  opacity: 1,
  transform: "translateY(0)",
  duration: 0.5,
  delay: 0.5,
  ease: "power2.inout" });

tl.to("#runoff", { opacity: 0, duration: 0.5, delay: 5, ease: "power2.inout" });
tl.to("#rain-clouds", {
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power2.inout" });


restartBtn.addEventListener("click", () => {
  tl.restart();
});

let status = true;
pausePlayBtn.addEventListener("click", () => {
  if (status) {
    tl.pause();
    pausePlayBtn.innerHTML = `
<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>
    `;
    status = false;
  } else {
    tl.play();
    pausePlayBtn.innerHTML = `

<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="pause-circle" class="svg-inline--fa fa-pause-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"></path></svg>
    `;
    status = true;
  }
});