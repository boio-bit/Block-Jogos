document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  document.getElementById("particles").appendChild(canvas);

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2
    });
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#ff003c";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();

      p.y += 0.5;
      if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(draw);
  }

  draw();
});
