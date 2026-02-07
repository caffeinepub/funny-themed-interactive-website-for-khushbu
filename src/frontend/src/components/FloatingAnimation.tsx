import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  type: 'heart' | 'smile';
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingAnimation() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate floating elements
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < 20; i++) {
      newElements.push({
        id: i,
        type: Math.random() > 0.5 ? 'heart' : 'smile',
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        size: 40 + Math.random() * 40
      });
    }
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float-up opacity-70"
          style={{
            left: `${element.left}%`,
            bottom: '-100px',
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            width: `${element.size}px`,
            height: `${element.size}px`
          }}
        >
          <img
            src={
              element.type === 'heart'
                ? '/assets/generated/heart-icon-cheerful-transparent.dim_64x64.png'
                : '/assets/generated/smile-icon-transparent.dim_64x64.png'
            }
            alt={element.type}
            className="w-full h-full object-contain animate-spin-slow"
          />
        </div>
      ))}
    </div>
  );
}
