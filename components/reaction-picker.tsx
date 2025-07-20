'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ThumbsUp } from 'lucide-react';

interface Reaction {
  id: string;
  emoji: string;
  label: string;
  color: string;
}

const reactions: Reaction[] = [
  { id: 'like', emoji: '👍', label: 'Like', color: 'text-blue-600' },
  { id: 'love', emoji: '❤️', label: 'Love', color: 'text-red-500' },
  {
    id: 'celebrate',
    emoji: '🎉',
    label: 'Celebrate',
    color: 'text-yellow-500',
  },
  { id: 'support', emoji: '🤝', label: 'Support', color: 'text-green-600' },
  {
    id: 'insightful',
    emoji: '💡',
    label: 'Insightful',
    color: 'text-orange-500',
  },
  { id: 'funny', emoji: '😂', label: 'Funny', color: 'text-purple-500' },
];

interface ReactionPickerProps {
  currentReaction: string | null;
  onReactionSelect: (reaction: Reaction | null) => void;
  count: number;
}

export function ReactionPicker({
  currentReaction,
  onReactionSelect,
  count,
}: ReactionPickerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showPicker]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setShowPicker(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setShowPicker(false);
      }, 300);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setShowPicker(!showPicker);
    } else {
      // On desktop, clicking toggles the current reaction
      if (currentReaction) {
        onReactionSelect(null);
      } else {
        onReactionSelect(reactions[0]); // Default to like
      }
    }
  };

  const handleReactionSelect = (reaction: Reaction) => {
    if (currentReaction === reaction.id) {
      onReactionSelect(null); // Remove reaction if same one is clicked
    } else {
      onReactionSelect(reaction);
    }
    setShowPicker(false);
  };

  const getCurrentReaction = () => {
    return reactions.find((r) => r.id === currentReaction);
  };

  const currentReactionData = getCurrentReaction();

  return (
    <div className="relative" ref={pickerRef}>
      {/* Reaction Picker Popup */}
      {showPicker && (
        <div
          className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 px-2 py-2 flex space-x-1 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
          onMouseEnter={() => !isMobile && handleMouseEnter()}
          onMouseLeave={() => !isMobile && handleMouseLeave()}
        >
          {reactions.map((reaction) => (
            <button
              key={reaction.id}
              onClick={() => handleReactionSelect(reaction)}
              className="relative group flex flex-col items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              title={reaction.label}
            >
              <span className="text-2xl">{reaction.emoji}</span>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {reaction.label}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Main Like Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`space-x-1 transition-colors duration-200 ${
          currentReactionData
            ? currentReactionData.color
            : 'hover:text-blue-600'
        }`}
      >
        {currentReactionData ? (
          <span className="text-lg">{currentReactionData.emoji}</span>
        ) : (
          <ThumbsUp className="size-5" />
        )}
        <span className="font-semibold">
          {currentReactionData ? currentReactionData.label : 'Like'}
        </span>
        <span>{count}</span>
      </Button>
    </div>
  );
}
