'use client';

import React from 'react';

interface DropZoneAreaProps {
  label: string;
}

const DropZoneArea: React.FC<DropZoneAreaProps> = ({ label }) => {
  return (
    <div className="h-16 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
      <span className="text-gray-500 dark:text-gray-400 font-bold tracking-widest">{label}</span>
    </div>
  );
};

export default DropZoneArea;