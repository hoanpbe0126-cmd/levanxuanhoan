import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/50 flex items-center justify-center glow animate-pulse-glow">
          <span className="text-4xl font-bold text-gradient">TN</span>
        </div>

        <p className="text-primary font-mono text-sm tracking-widest mb-4 animate-fade-in">
          HELLO, I'M
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-foreground">Tên </span>
          <span className="text-gradient">Của Bạn</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Full-Stack Developer & Creative Coder
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Tôi là một lập trình viên đam mê tạo ra những trải nghiệm web đẹp mắt và hiệu quả. 
          Với kinh nghiệm đa dạng trong phát triển frontend và backend, 
          tôi luôn tìm cách đưa ý tưởng thành hiện thực.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-xl hover:glow hover:border-primary/50 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-xl hover:glow hover:border-primary/50 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:email@example.com"
            className="glass p-4 rounded-xl hover:glow hover:border-primary/50 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#about" 
          className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-sm font-mono mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
