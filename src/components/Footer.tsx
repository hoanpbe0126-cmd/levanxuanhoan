import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Tên Của Bạn. All rights reserved.
        </p>
        
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> using React
        </p>
      </div>
    </footer>
  );
};
