import { useState, useRef, useEffect, useCallback, RefObject } from 'react';

interface UseCustomScrollProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

interface UseCustomScrollReturn {
  scrollProgress: number;
  thumbWidth: number;
  isDragging: boolean;
  trackRef: RefObject<HTMLDivElement | null>;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleTrackClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleManualScroll: (direction: 'left' | 'right') => void;
}

export const useCustomScroll = ({ scrollContainerRef }: UseCustomScrollProps): UseCustomScrollReturn => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(30); // Persentase lebar handle bar
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Fungsi untuk mengupdate posisi dan lebar handle berdasarkan scroll asli
  const updateScrollInfo = useCallback(() => {
    const element = scrollContainerRef.current;
    if (element) {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      
      // Hitung progress (0 sampai 1)
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);

      // Hitung lebar thumb secara dinamis (opsional, agar proporsional)
      const widthRatio = (clientWidth / scrollWidth) * 100;
      setThumbWidth(Math.max(widthRatio, 20)); // Minimal lebar 20%
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const element = scrollContainerRef.current;
    if (element) {
      element.addEventListener('scroll', updateScrollInfo);
      window.addEventListener('resize', updateScrollInfo);
      // Inisialisasi awal
      updateScrollInfo();
    }
    return () => {
      if (element) element.removeEventListener('scroll', updateScrollInfo);
      window.removeEventListener('resize', updateScrollInfo);
    };
  }, [scrollContainerRef, updateScrollInfo]);

  // Fungsi untuk menangani drag pada handle
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    if (scrollContainerRef.current) {
      setStartScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  // Fungsi untuk menangani drag saat mouse bergerak
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current || !trackRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const trackWidth = trackRect.width;
    const thumbWidthPx = (thumbWidth / 100) * trackWidth;
    const maxTrackScroll = trackWidth - thumbWidthPx;
    
    // Hitung perbedaan mouse
    const diff = e.clientX - startX;
    const scrollRatio = diff / maxTrackScroll;
    
    // Hitung scroll target
    const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
    const scrollTarget = startScrollLeft + (scrollRatio * maxScroll);
    
    // Terapkan batas scroll
    scrollContainerRef.current.scrollLeft = Math.max(0, Math.min(maxScroll, scrollTarget));
  };

  // Fungsi untuk menangani akhir drag
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Fungsi untuk meng-handle klik pada track
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return; // Jika sedang drag, jangan lakukan klik
    
    if (!scrollContainerRef.current || !trackRef.current) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - trackRect.left) / trackRect.width;
    const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
    const scrollTarget = clickPosition * maxScroll;
    
    scrollContainerRef.current.scrollTo({
      left: scrollTarget,
      behavior: 'smooth'
    });
  };

  // Fungsi untuk scroll manual
  const handleManualScroll = (direction: 'left' | 'right') => {
    const element = scrollContainerRef.current;
    if (element) {
      const scrollAmount = 320; // Jarak geser per klik
      element.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Tambahkan event listener global saat sedang drag
  useEffect(() => {
    if (isDragging) {
      // Gunakan throttle untuk membatasi frekuensi eksekusi handleMouseMove
      let ticking = false;
      
      const throttledMouseMove = (e: MouseEvent) => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleMouseMove(e);
            ticking = false;
          });
          ticking = true;
        }
      };
      
      document.addEventListener('mousemove', throttledMouseMove as EventListener);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', throttledMouseMove as EventListener);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startX, startScrollLeft, thumbWidth]);

  return {
    scrollProgress,
    thumbWidth,
    isDragging,
    trackRef,
    handleMouseDown,
    handleTrackClick,
    handleManualScroll
  };
};