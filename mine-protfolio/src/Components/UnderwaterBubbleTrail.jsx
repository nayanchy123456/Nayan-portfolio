import React, { useEffect, useRef } from 'react';

const UnderwaterBubbleTrail = () => {
  const canvasRef = useRef(null);
  const bubbles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        bubbles.current.push({
          x: e.clientX + Math.random() * 10 - 5,
          y: e.clientY + Math.random() * 10 - 5,
          radius: Math.random() * 4 + 2,
          alpha: 1,
          vy: Math.random() * -1.5 - 0.5,
          vx: Math.random() * 0.6 - 0.3,
          wobble: Math.random() * 0.2 + 0.05,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = bubbles.current.length - 1; i >= 0; i--) {
        const b = bubbles.current[i];
        b.y += b.vy;
        b.x += b.vx + Math.sin(Date.now() * 0.002 + b.y) * b.wobble;
        b.alpha -= 0.008;

        if (b.alpha <= 0) {
          bubbles.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 150, 255, ${b.alpha})`;
        ctx.shadowColor = `rgba(0, 150, 255, ${b.alpha})`;
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default UnderwaterBubbleTrail;
