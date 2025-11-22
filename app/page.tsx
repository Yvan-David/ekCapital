"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ComingSoon() {
  const canvasRef = useRef(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create floating geometric shapes
    const geometry1 = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
    const geometry2 = new THREE.OctahedronGeometry(0.6);
    const geometry3 = new THREE.IcosahedronGeometry(0.4);
    
    const material = new THREE.MeshPhongMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.3,
      shininess: 100,
      transparent: true,
      opacity: 0.6,
    });

    const torus = new THREE.Mesh(geometry1, material);
    const octahedron = new THREE.Mesh(geometry2, material.clone());
    const icosahedron = new THREE.Mesh(geometry3, material.clone());

    torus.position.set(-3, 2, -2);
    octahedron.position.set(3, -2, -3);
    icosahedron.position.set(-2, -2, -1);

    scene.add(torus, octahedron, icosahedron);

    // Create glowing lines/curves
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4, -1, -2),
      new THREE.Vector3(-2, 1, -1),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(2, -1, -1),
      new THREE.Vector3(4, 1, -2),
    ]);

    const points = curve.getPoints(100);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.4,
      linewidth: 2,
    });

    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xf59e0b, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 0.5, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation
    let animationId:any;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      torus.rotation.x += 0.003;
      torus.rotation.y += 0.005;
      
      octahedron.rotation.x += 0.002;
      octahedron.rotation.z += 0.004;

      icosahedron.rotation.y += 0.003;
      icosahedron.rotation.z += 0.002;

      // Floating animation
      torus.position.y += Math.sin(Date.now() * 0.001) * 0.0005;
      octahedron.position.y += Math.cos(Date.now() * 0.001) * 0.0005;
      icosahedron.position.y += Math.sin(Date.now() * 0.0015) * 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for your interest! We'll notify ${email} when we launch.`);
      setEmail('');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ opacity: 0.7 }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 text-white">
        {/* Logo */}
        <div className="mb-12 flex items-center gap-4 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-900 shadow-lg shadow-amber-500/50">
            EK
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold tracking-tight">EK CAPITAL GROUP</h1>
            <p className="text-amber-400 text-sm tracking-widest">CONSULTING</p>
          </div>
        </div>

        {/* Launch Badge */}
        <div className="mb-8 px-6 py-2 border border-amber-500/30 rounded-full text-amber-400 text-xs flex items-center gap-2 backdrop-blur-sm bg-white/5 animate-pulse-subtle">
          <svg className="w-4 h-4 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
          </svg>
          <span className="animate-text-shimmer">LAUNCHING SOON</span>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mb-12 py-8">
          <p className="text-lg mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>A New Era of</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Business Excellence
          </h2>
          <p className="text-lg mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Is Being Built</p>
          
          <p className="text-base md:text-lg text-amber-400 mb-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Engineering Growth. Unlocking Cashflow. Transforming Businesses.
          </p>
          
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
            EK Capital Group empowers corporate and medium businesses with smart consulting,
            financial optimization, and strategies that boost cashflow. Something exceptional is coming.
          </p>
        </div>

        {/* Email Input */}
        <div className="w-full max-w-md mb-12 py-4">
          <div className="relative flex items-center gap-2 bg-slate-800/50 backdrop-blur-md rounded-full p-2 border-2 border-slate-700/50 shadow-2xl email-input-glow">
            <svg className="w-5 h-5 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 px-2 text-sm"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-900 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 text-sm hover:scale-105"
            >
              Notify Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">World-Class Consulting</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <span className="text-gray-300">Premium Platform</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        @keyframes text-shimmer {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.3), 0 0 40px rgba(245, 158, 11, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.2), 0 0 80px rgba(245, 158, 11, 0.1);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-text-shimmer {
          animation: text-shimmer 2s ease-in-out infinite;
        }

        .email-input-glow {
          animation: glow-pulse 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .email-input-glow:hover {
          border-color: rgba(245, 158, 11, 0.5);
        }

        .email-input-glow:focus-within {
          border-color: rgba(245, 158, 11, 0.8);
          box-shadow: 0 0 40px rgba(245, 158, 11, 0.6), 0 0 70px rgba(245, 158, 11, 0.3);
        }
      `}</style>
    </div>
  );
}