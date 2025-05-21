// components/DotBackground.js
'use client'; // if using app router

import { useEffect, useRef } from 'react';

const DotBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const dots = Array.from({ length: 500 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: 0.3 + Math.random() * 0.3, // super small dots
            dx: (Math.random() - 0.5) * 0.2,
            dy: (Math.random() - 0.5) * 0.2,
            color: Math.random() > 0.5 ? 'orange' : 'green',
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                dot.x += dot.dx;
                dot.y += dot.dy;

                // bounce back
                if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
                if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
                ctx.fillStyle = dot.color;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
            }}
        />
    );
};

export default DotBackground;
