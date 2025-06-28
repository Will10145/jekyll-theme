// Moving dots background animation
(function() {
  const canvas = document.getElementById('bg-animation');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let dots = [];
  const DOTS_COUNT = 60;
  const DOT_RADIUS = 2.2;
  const SPEED = 0.5;
  const LINE_DIST = 110;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function randomDot() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED
    };
  }

  function initDots() {
    dots = [];
    for (let i = 0; i < DOTS_COUNT; i++) {
      dots.push(randomDot());
    }
  }

  function getThemeColors() {
    // Detect light mode by checking body class
    const isLight = document.body.classList.contains('light-mode');
    return isLight
      ? {
          dot: "rgba(60,90,180,0.55)",
          line: "rgba(80,120,220,0.13)"
        }
      : {
          dot: "rgba(100,140,255,0.7)",
          line: "rgba(120,120,180,0.18)"
        };
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const colors = getThemeColors();
    // Draw lines
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < LINE_DIST) {
          ctx.strokeStyle = colors.line;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }
    // Draw dots
    for (let dot of dots) {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, 2 * Math.PI);
      ctx.fillStyle = colors.dot;
      ctx.fill();
    }
  }

  function update() {
    for (let dot of dots) {
      dot.x += dot.vx;
      dot.y += dot.vy;
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;
    }
  }

  function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', function() {
    resize();
    initDots();
  });

  // Redraw when theme changes
  const observer = new MutationObserver(draw);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  resize();
  initDots();
  animate();
})();
