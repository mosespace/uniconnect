'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
  className?: string;
}

export function ExpandableText({
  text,
  maxLines = 2,
  className = '',
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkTextOverflow = () => {
      if (textRef.current) {
        const element = textRef.current;
        const lineHeight = Number.parseInt(
          window.getComputedStyle(element).lineHeight
        );
        const maxHeight = lineHeight * maxLines;

        // Create a temporary element to measure the full text height
        const tempElement = element.cloneNode(true) as HTMLElement;
        tempElement.style.position = 'absolute';
        tempElement.style.visibility = 'hidden';
        tempElement.style.height = 'auto';
        tempElement.style.maxHeight = 'none';
        tempElement.style.webkitLineClamp = 'none';
        tempElement.style.overflow = 'visible';

        document.body.appendChild(tempElement);
        const fullHeight = tempElement.scrollHeight;
        document.body.removeChild(tempElement);

        setShowReadMore(fullHeight > maxHeight);
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);

    return () => window.removeEventListener('resize', checkTextOverflow);
  }, [text, maxLines]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${className}`}>
      <p
        ref={textRef}
        className={`text-muted-foreground flex transition-all duration-300 ${
          !isExpanded && showReadMore
            ? `line-clamp-${maxLines} overflow-hidden`
            : ''
        }`}
        style={{
          display: !isExpanded && showReadMore ? '-webkit-box' : 'block',
          WebkitLineClamp: !isExpanded && showReadMore ? maxLines : 'none',
          WebkitBoxOrient: 'vertical' as const,
        }}
      >
        {text}
      </p>

      {showReadMore && (
        <Button
          onClick={toggleExpanded}
          variant="ghost"
          size="sm"
          className="p-0 h-auto font-medium text-muted-foreground/80 cursor-pointer hover:underline hover:text-primary/80 mt-1"
        >
          {isExpanded ? 'show less' : 'more'}
        </Button>
      )}
    </div>
  );
}
