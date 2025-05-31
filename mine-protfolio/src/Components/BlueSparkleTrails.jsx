import React, { useEffect, useRef } from 'react';

const BlueSparkleTrail = () => {
  const canvasRef = useRef(null);
  const sparkles = useRef([]);

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

    const createSparkle = (x, y) => {
      const count = 3; // number of sparkles per movement
      for (let i = 0; i < count; i++) {
        sparkles.current.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          radius: Math.random() * 2 + 1,
          alpha: 1,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
        });
      }
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      sparkles.current.forEach((sparkle, i) => {
        sparkle.x += sparkle.vx;
        sparkle.y += sparkle.vy;
        sparkle.alpha -= 0.02;

        if (sparkle.alpha <= 0) {
          sparkles.current.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 200, 255, ${sparkle.alpha})`;
          ctx.shadowColor = 'rgba(0, 200, 255, 0.8)';
          ctx.shadowBlur = 10;
          ctx.fill();
        }
      });

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
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default BlueSparkleTrail;
