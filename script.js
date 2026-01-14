// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Typing Effect
const text = "Tech Enthusiast | Web Developer | Python & Electronics";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text[i++];
    setTimeout(type, 80);
  }
}
type();

// Scroll Fade Animation
// सुधरा हुआ कोड
const faders = document.querySelectorAll(".fade");

const appearOnScroll = () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
};

// पेज लोड होते ही और स्क्रॉल करने पर, दोनों समय चेक करेगा
window.addEventListener("load", appearOnScroll);
window.addEventListener("scroll", appearOnScroll);


// Particle Background
const c = document.getElementById("particles");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

let particles = Array.from({length:80}, () => ({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  vx:(Math.random()-.5),
  vy:(Math.random()-.5)
}));

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  particles.forEach(p=>{
    ctx.fillStyle="#38bdf8";
    ctx.fillRect(p.x,p.y,2,2);
    p.x+=p.vx;
    p.y+=p.vy;
    if(p.x<0||p.x>c.width) p.vx*=-1;
    if(p.y<0||p.y>c.height) p.vy*=-1;
  });
  requestAnimationFrame(draw);
}
draw();

