"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  before: string;
  after: string;
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in event ? (event as React.TouchEvent).touches[0].clientX : (event as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="before-after-container"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Base Image (After) - This defines the container height */}
      <img 
        src={after} 
        alt="Depois" 
        className="before-after-img-base" 
      />
      
      {/* Overlay Image (Before) - Clipped */}
      <div 
        className="before-after-overlay-container"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={before} 
          alt="Antes" 
          className="before-after-img-overlay" 
        />
      </div>

      <div 
        className="before-after-slider-line"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="before-after-slider-handle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8L22 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L2 12L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="before-after-labels">
        <span className="label-antes">Antes</span>
        <span className="label-depois">Depois</span>
      </div>
    </div>
  );
}
