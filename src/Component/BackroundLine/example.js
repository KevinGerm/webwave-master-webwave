import React, { useEffect, useState, useRef} from "react";

//disparait quand on recharge la page --- A voir

const BackgroundLine = () => {
    const canvasRef = useRef(null);
    const [particles, setParticles] = useState([]);
  
    const RADIUS = 110;
  
    let RADIUS_SCALE = useRef(1);
    const RADIUS_SCALE_MIN = 1;
    const RADIUS_SCALE_MAX = 1.5;
    const SIZE = { width: window.innerWidth, height: window.innerHeight };
    let mouseX = useRef(SIZE.width - SIZE.width / 2);
    let mouseY = useRef(SIZE.height - SIZE.height / 2);
    
    let [mouseIsDown, setMouseIsDown] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
    
        const createParticles = () => {
          const newParticles = [];
    
          for (let i = 0; i < 25; i++) {
            const particle = {
              position: { x: mouseX.current, y: mouseY.current },
              shift: { x: mouseX.current, y: mouseY.current },
              size: 1,
              angle: 0,
              speed: 0.01 + Math.random() * 0.04,
              targetSize: 1,
              fillColor: '#' + ((Math.random() * 0x404040 + 0xaaaaaa) | 0).toString(16),
              orbit: RADIUS * 0.5 + RADIUS * 0.5 * Math.random(),
            };
    
            newParticles.push(particle);
          }
    
          setParticles(newParticles);
        };

        createParticles();
    
        const documentMouseMoveHandler = (event) => {
          mouseX.current = event.clientX - (window.innerWidth - SIZE.width) * 0.5;
          mouseY.current = event.clientY - (window.innerHeight - SIZE.height) * 0.5;
        };
    
        const documentMouseDownHandler = () => {
          setMouseIsDown(true);
        };
    
        const documentMouseUpHandler = () => {
            setMouseIsDown(false)
        };
    
        const canvasTouchStartHandler = (event) => {
          if (event.touches.length === 1) {
            event.preventDefault();
    
            mouseX.current = event.touches[0].pageX - (window.innerWidth - SIZE.width) * 0.5;
            mouseY.current = event.touches[0].pageY - (window.innerHeight - SIZE.height) * 0.5;
          }
        };
    
        const canvasTouchMoveHandler = (event) => {
          if (event.touches.length === 1) {
            event.preventDefault();
    
            mouseX.current = event.touches[0].pageX - (window.innerWidth - SIZE.width) * 0.5;
            mouseY.current = event.touches[0].pageY - (window.innerHeight - SIZE.height) * 0.5;
          }
        };
    
        const windowResizeHandler = () => {
          canvas.width = SIZE.width;
          canvas.height = SIZE.height;
    
          canvas.style.position = 'fixed';
          canvas.style.left = (window.innerWidth - SIZE.width) * 0.5 + 'px';
          canvas.style.top = (window.innerHeight - SIZE.height) * 0.5 + 'px';
        };

        const loop = () => {
            if (mouseIsDown) {
              // Scale upward to the max scale
              RADIUS_SCALE.current += (RADIUS_SCALE_MAX - RADIUS_SCALE.current) * 0.02;
            } else {
              // Scale downward to the min scale
              RADIUS_SCALE.current -= (RADIUS_SCALE.current - RADIUS_SCALE_MIN) * 0.02;
            }
      
            RADIUS_SCALE.current = Math.min(RADIUS_SCALE.current, RADIUS_SCALE_MAX);
            context.fillStyle = 'rgba(255,255,255,0.1)';
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            particles.forEach((particle, i) => {
                const lp = { x: particle.position.x, y: particle.position.y };
            
                particle.angle += particle.speed;
            
                particle.shift.x += (mouseX.current - particle.shift.x) * particle.speed;
                particle.shift.y += (mouseY.current - particle.shift.y) * particle.speed;
            
                particle.position.x = particle.shift.x + Math.cos(i + particle.angle) * (particle.orbit * RADIUS_SCALE.current);
                particle.position.y = particle.shift.y + Math.sin(i + particle.angle) * (particle.orbit * RADIUS_SCALE.current);
            
                particle.position.x = Math.max(Math.min(particle.position.x, SIZE.width), 0);
                particle.position.y = Math.max(Math.min(particle.position.y, SIZE.height), 0);
            
                particle.size += (particle.targetSize - particle.size) * 0.05;
            
                if (Math.round(particle.size) === Math.round(particle.targetSize)) {
                  particle.targetSize = 1 + Math.random() * 7;
                }
            
                context.beginPath();
                context.fillStyle = particle.fillColor;
                context.strokeStyle = particle.fillColor;
                context.lineWidth = particle.size;
                context.moveTo(lp.x, lp.y);
                context.lineTo(particle.position.x, particle.position.y);
                context.stroke();
                context.arc(particle.position.x, particle.position.y, particle.size / 2, 0, Math.PI * 2, true);
                context.fill();
              });
            
              requestAnimationFrame(loop);
            };
            document.addEventListener('mousemove', documentMouseMoveHandler, false);
            document.addEventListener('mousedown', documentMouseDownHandler, false);
            document.addEventListener('mouseup', documentMouseUpHandler, false);
            canvas.addEventListener('touchstart', canvasTouchStartHandler, false);
            canvas.addEventListener('touchmove', canvasTouchMoveHandler, false);
            window.addEventListener('resize', windowResizeHandler, false);

            
            windowResizeHandler();

            requestAnimationFrame(loop);

            return () => {
              document.removeEventListener('mousemove', documentMouseMoveHandler);
              document.removeEventListener('mousedown', documentMouseDownHandler);
              document.removeEventListener('mouseup', documentMouseUpHandler);
              canvas.removeEventListener('touchstart', canvasTouchStartHandler);
              canvas.removeEventListener('touchmove', canvasTouchMoveHandler);
              window.removeEventListener('resize', windowResizeHandler);
          };
            
    },[])


    return <canvas
        ref={canvasRef} 
    />;
};

export default BackgroundLine;
