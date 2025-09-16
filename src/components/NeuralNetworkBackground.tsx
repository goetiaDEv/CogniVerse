import React, { useRef, useEffect } from 'react';

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let nodes: Node[] = [];
    const CONNECTION_DISTANCE = 150;
    const NODE_COUNT = 50;
    const NODE_RADIUS = 3;
    const NODE_SPEED = 0.5;
    const NEON_BLUE = 'rgba(0, 191, 255, 1)';

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    const resizeCanvas = () => {
      const headerElement = document.querySelector('.header');
      if (headerElement instanceof HTMLElement) {
        canvas.width = headerElement.offsetWidth;
        canvas.height = headerElement.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.7; // Fallback ou para seções maiores
      }
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * NODE_SPEED,
          vy: (Math.random() - 0.5) * NODE_SPEED,
          radius: NODE_RADIUS,
          color: NEON_BLUE,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.05 + 0.01,
        });
      }
    };

    const updateNodes = () => {
      for (let i = 0; i < NODE_COUNT; i++) {
        let node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.pulse += node.pulseSpeed;
        if (node.pulse > Math.PI * 2) node.pulse = 0;
      }
    };

    const drawNodes = () => {
      for (let i = 0; i < NODE_COUNT; i++) {
        let node = nodes[i];
        const currentRadius = node.radius + Math.sin(node.pulse) * (NODE_RADIUS / 2);

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const node1 = nodes[i];
          const node2 = nodes[j];

          const dist = Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));

          if (dist < CONNECTION_DISTANCE) {
            const opacity = 1 - (dist / CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateNodes();
      drawConnections();
      drawNodes();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initNodes();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>;
};

export default NeuralNetworkBackground;
