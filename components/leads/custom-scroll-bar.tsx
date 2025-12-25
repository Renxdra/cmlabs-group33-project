'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCustomScroll } from './use-custom-scroll';

interface CustomScrollBarProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

const CustomScrollBar: React.FC<CustomScrollBarProps> = ({ scrollContainerRef }) => {
  const { scrollProgress, thumbWidth, isDragging, trackRef, handleMouseDown, handleTrackClick, handleManualScroll } = useCustomScroll({ scrollContainerRef });

  return (
    <div className="flex items-center gap-4 flex-1 max-w-2xl ml-8">
      {/* Tombol Kiri */}
      <button
        onClick={() => handleManualScroll('left')}
        className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-50 border border-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Track Bar (Garis Putih Panjang) */}
      <div 
        ref={trackRef}
        className="flex-1 h-2 bg-white rounded-full relative shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden cursor-pointer"
        onClick={handleTrackClick}
      >
        {/* Handle Bar (Bagian Abu-abu Gelap) */}
        <div
          className="h-full bg-gray-500 rounded-full absolute top-0 cursor-grab active:cursor-grabbing"
          style={{
            width: `${thumbWidth}%`,
            left: `${scrollProgress * (100 - thumbWidth)}%`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>

      {/* Tombol Kanan */}
      <button
        onClick={() => handleManualScroll('right')}
        className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-50 border border-gray-100"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CustomScrollBar;