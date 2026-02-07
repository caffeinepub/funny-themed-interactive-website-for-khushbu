import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 text-center text-sm text-romantic-muted">
      <div className="flex items-center justify-center gap-2">
        <span>© 2025. Built with</span>
        <Heart className="w-4 h-4 text-romantic-primary animate-pulse" fill="currentColor" />
        <span>using</span>
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-romantic-primary hover:text-romantic-secondary transition-colors underline"
        >
          caffeine.ai
        </a>
      </div>
    </footer>
  );
}
