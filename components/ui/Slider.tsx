// components/ui/Slider.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number[];
  onChange?: (value: number[]) => void;
  onChangeEnd?: (value: number[]) => void;
  className?: string;
}

export const Slider = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  onChangeEnd,
  className,
}: SliderProps) => {
  const [localValue, setLocalValue] = useState(value);
  const [isDragging, setIsDragging] = useState<null | "min" | "max">(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Update local value when prop value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const getPercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const getValueFromPosition = (position: number) => {
    const trackRect = trackRef.current?.getBoundingClientRect();
    if (!trackRect) return min;
    
    // Calculate percentage of position within track
    const percentage = Math.max(0, Math.min(100, (position - trackRect.left) / trackRect.width * 100));
    
    // Convert percentage to value
    let rawValue = min + (percentage / 100) * (max - min);
    
    // Apply step
    const steppedValue = Math.round(rawValue / step) * step;
    
    // Ensure value is within bounds
    return Math.max(min, Math.min(max, steppedValue));
  };

  const handleMouseDown = (event: React.MouseEvent, handle: "min" | "max") => {
    setIsDragging(handle);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    event.preventDefault(); // Prevent text selection
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    
    const newValue = getValueFromPosition(event.clientX);
    
    setLocalValue(prev => {
      const [minVal, maxVal] = prev;
      
      if (isDragging === "min") {
        // Ensure min doesn't exceed max
        const newMin = Math.min(newValue, maxVal - step);
        return [newMin, maxVal];
      } else {
        // Ensure max doesn't go below min
        const newMax = Math.max(newValue, minVal + step);
        return [minVal, newMax];
      }
    });
    
    onChange?.(isDragging === "min" 
      ? [getValueFromPosition(event.clientX), localValue[1]] 
      : [localValue[0], getValueFromPosition(event.clientX)]
    );
  };

  const handleMouseUp = () => {
    setIsDragging(null);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    onChangeEnd?.(localValue);
  };

  // For touch devices
  const handleTouchStart = (event: React.TouchEvent, handle: "min" | "max") => {
    setIsDragging(handle);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    event.preventDefault();
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!isDragging) return;
    event.preventDefault();
    
    const touch = event.touches[0];
    const newValue = getValueFromPosition(touch.clientX);
    
    setLocalValue(prev => {
      const [minVal, maxVal] = prev;
      
      if (isDragging === "min") {
        // Ensure min doesn't exceed max
        const newMin = Math.min(newValue, maxVal - step);
        return [newMin, maxVal];
      } else {
        // Ensure max doesn't go below min
        const newMax = Math.max(newValue, minVal + step);
        return [minVal, newMax];
      }
    });
    
    onChange?.(isDragging === "min" 
      ? [getValueFromPosition(touch.clientX), localValue[1]] 
      : [localValue[0], getValueFromPosition(touch.clientX)]
    );
  };

  const handleTouchEnd = () => {
    setIsDragging(null);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
    onChangeEnd?.(localValue);
  };

  return (
    <div className={cn("relative pt-5 pb-5", className)}>
      <div 
        ref={trackRef}
        className="h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full"
      >
        {/* Filled Track */}
        <div 
          className="absolute h-2 bg-primary-500 dark:bg-primary-600 rounded-full"
          style={{
            left: `${getPercentage(localValue[0])}%`,
            width: `${getPercentage(localValue[1]) - getPercentage(localValue[0])}%`
          }}
        />
        
        {/* Min Handle */}
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={localValue[0]}
          tabIndex={0}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 -mt-px h-5 w-5 rounded-full bg-white border-2 border-primary-500 shadow",
            "cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2",
            isDragging === "min" && "scale-110"
          )}
          style={{ left: `calc(${getPercentage(localValue[0])}% - 10px)` }}
          onMouseDown={(e) => handleMouseDown(e, "min")}
          onTouchStart={(e) => handleTouchStart(e, "min")}
        />
        
        {/* Max Handle */}
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={localValue[1]}
          tabIndex={0}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 -mt-px h-5 w-5 rounded-full bg-white border-2 border-primary-500 shadow",
            "cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2",
            isDragging === "max" && "scale-110"
          )}
          style={{ left: `calc(${getPercentage(localValue[1])}% - 10px)` }}
          onMouseDown={(e) => handleMouseDown(e, "max")}
          onTouchStart={(e) => handleTouchStart(e, "max")}
        />
      </div>
    </div>
  );
};
