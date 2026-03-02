import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({
  title,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
}) => {
  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      drag={!isMaximized}
      dragMomentum={false}
      onMouseDown={onFocus}
      className={`absolute border-2 border-hacker-green bg-hacker-bg shadow-[0_0_20px_rgba(0,255,65,0.2)] flex flex-col overflow-hidden ${
        isMaximized ? 'inset-0 z-[100]' : 'w-[600px] h-[450px] rounded-sm'
      }`}
      style={{ zIndex, top: isMaximized ? 0 : '15%', left: isMaximized ? 0 : '20%' }}
    >
      {/* Title Bar */}
      <div className="bg-hacker-green text-hacker-dark px-3 py-1.5 flex items-center justify-between cursor-move select-none font-bold">
        <div className="flex items-center gap-2">
          <span className="text-xs">[*]</span>
          <span className="uppercase tracking-wider text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="hover:bg-hacker-dark hover:text-hacker-green p-0.5 transition-colors"
          >
            <Minus size={14} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            className="hover:bg-hacker-dark hover:text-hacker-green p-0.5 transition-colors"
          >
            {isMaximized ? <Square size={14} /> : <Maximize2 size={14} />}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="hover:bg-red-600 hover:text-white p-0.5 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative">
        {children}
        
        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-hacker-green/30 pointer-events-none" />
      </div>
    </motion.div>
  );
};
