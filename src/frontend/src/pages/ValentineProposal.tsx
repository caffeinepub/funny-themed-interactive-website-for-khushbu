import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Smile } from 'lucide-react';
import FloatingAnimation from '@/components/FloatingAnimation';
import SparkleEffect from '@/components/SparkleEffect';

export default function ValentineProposal() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setAnswered(true);
    setShowFloatingElements(true);
  };

  const handleNoButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (answered) return;
    
    const button = noButtonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate distance from mouse to button center
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
    );

    // If mouse is within 100px, move the button away
    if (distance < 100) {
      const angle = Math.atan2(mouseY - buttonCenterY, mouseX - buttonCenterX);
      const moveDistance = 150;
      
      // Calculate new position (move away from mouse)
      const newX = -Math.cos(angle) * moveDistance;
      const newY = -Math.sin(angle) * moveDistance;
      
      // Add some randomness
      const randomX = (Math.random() - 0.5) * 100;
      const randomY = (Math.random() - 0.5) * 100;
      
      setNoButtonPosition({
        x: newX + randomX,
        y: newY + randomY
      });
    }
  };

  const handleNoButtonClick = () => {
    // Button runs away on click too
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 relative">
      {/* Sparkle effects */}
      <SparkleEffect />
      
      {/* Floating hearts and smiles when "Yes" is clicked */}
      {showFloatingElements && <FloatingAnimation />}
      
      <div className="text-center space-y-12">
        {!answered ? (
          <>
            {/* Main question */}
            <div className="space-y-6 animate-in fade-in duration-1000">
              <div className="inline-block">
                <Smile className="w-20 h-20 text-funny-primary mx-auto mb-6 animate-bounce" strokeWidth={2} />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-funny-primary via-funny-secondary to-funny-accent bg-clip-text text-transparent leading-tight px-4">
                are you सिडान / सुगली / कालती / टिटन /?
              </h1>
              
              <p className="text-xl md:text-2xl text-funny-muted font-light">
                Dear Khushbu
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button
                size="lg"
                onClick={handleYesClick}
                className="text-xl px-12 py-8 bg-gradient-to-r from-funny-primary to-funny-secondary hover:from-funny-secondary hover:to-funny-primary transition-all duration-300 transform hover:scale-110 shadow-funny"
              >
                Yes 💖
              </Button>
              
              <Button
                ref={noButtonRef}
                size="lg"
                variant="outline"
                onMouseMove={handleNoButtonHover}
                onClick={handleNoButtonClick}
                className="text-xl px-12 py-8 border-2 border-funny-accent text-funny-accent hover:bg-funny-accent/10 transition-all duration-300"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                No 💕
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-8 animate-in fade-in zoom-in duration-1000">
            <div className="flex items-center justify-center gap-4">
              <Heart className="w-24 h-24 text-funny-primary animate-bounce" fill="currentColor" />
              <Smile className="w-24 h-24 text-funny-secondary animate-bounce" strokeWidth={2} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-funny-primary via-funny-secondary to-funny-accent bg-clip-text text-transparent leading-tight px-4">
              Every moment with you feels like a dream come true...
            </h2>
            
            <div className="flex items-center justify-center gap-4 text-funny-muted text-lg">
              <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
              <span>Forever yours</span>
              <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
