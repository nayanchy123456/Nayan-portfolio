import React, { useEffect, useRef } from 'react';

const BlueStarTrail = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

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
      for (let i = 0; i < 2; i++) {
        stars.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 2 + 1.5,
          alpha: 1,
          life: 60,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const drawStar = (x, y, r, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0, -r);
      for (let i = 0; i < 5; i++) {
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, -r * 0.5);
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, -r);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(0, 200, 255, ${alpha})`;
      ctx.shadowColor = `rgba(0, 200, 255, ${alpha})`;
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.current.forEach((star, i) => {
        star.x += star.vx;
        star.y += star.vy;
        star.life -= 1;
        star.alpha -= 0.015;

        if (star.life <= 0 || star.alpha <= 0) {
          stars.current.splice(i, 1);
        } else {
          drawStar(star.x, star.y, star.size, star.alpha);
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

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
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default BlueStarTrail;
