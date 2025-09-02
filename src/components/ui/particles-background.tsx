"use client";
import { useEffect, useRef, useCallback, useState } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Configuration
  const config = {
    particleCount: 80,
    connectionDistance: 120,
    mouseInfluenceDistance: 150,
    particleSpeed: 0.5,
    particleSize: { min: 1, max: 2 },
    opacity: { particle: 0.6, connection: 0.15 },
  };

  // Initialize particles
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.particleSpeed,
        vy: (Math.random() - 0.5) * config.particleSpeed,
        opacity: Math.random() * config.opacity.particle + 0.2,
        size: Math.random() * (config.particleSize.max - config.particleSize.min) + config.particleSize.min,
      });
    }
    particlesRef.current = particles;
  }, []);

  // Update particle positions
  const updateParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    particles.forEach((particle) => {
      // Mouse influence
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.mouseInfluenceDistance) {
        const force = (config.mouseInfluenceDistance - distance) / config.mouseInfluenceDistance;
        particle.vx += (dx / distance) * force * 0.02;
        particle.vy += (dy / distance) * force * 0.02;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary collision
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx = -particle.vx;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy = -particle.vy;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Friction
      particle.vx *= 0.999;
      particle.vy *= 0.999;
    });
  }, []);

  // Draw particles and connections
  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;
    const isDark = theme === 'dark';
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    const connections: Connection[] = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.connectionDistance) {
          const opacity = (1 - distance / config.connectionDistance) * config.opacity.connection;
          connections.push({
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
            opacity,
          });
        }
      }
    }

    // Render connections
    connections.forEach((connection) => {
      ctx.beginPath();
      ctx.strokeStyle = isDark 
        ? `rgba(255, 255, 255, ${connection.opacity})` 
        : `rgba(0, 0, 0, ${connection.opacity})`;
      ctx.lineWidth = 0.5;
      ctx.moveTo(connection.x1, connection.y1);
      ctx.lineTo(connection.x2, connection.y2);
      ctx.stroke();
    });

    // Render particles
    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = isDark 
        ? `rgba(255, 255, 255, ${particle.opacity})` 
        : `rgba(0, 0, 0, ${particle.opacity})`;
      ctx.fill();
    });
  }, [theme]);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;

    updateParticles(canvas);
    draw(canvas, ctx);
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [updateParticles, draw]);

  // Resize handler
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    // Redistribute particles on resize
    const particles = particlesRef.current;
    particles.forEach((particle) => {
      if (particle.x > canvas.width) particle.x = Math.random() * canvas.width;
      if (particle.y > canvas.height) particle.y = Math.random() * canvas.height;
    });
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial setup
    handleResize();
    initParticles(canvas);

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mounted, handleResize, initParticles, animate, handleMouseMove]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-50"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}