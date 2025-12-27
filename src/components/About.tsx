import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Senior Developer",
    company: "Tech Company",
    description: "Phát triển và quản lý các dự án web quy mô lớn",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "Startup XYZ",
    description: "Xây dựng các ứng dụng từ đầu đến cuối",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Cử nhân CNTT",
    company: "Đại học ABC",
    description: "Tốt nghiệp loại giỏi, chuyên ngành Kỹ thuật phần mềm",
    icon: GraduationCap,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">GIỚI THIỆU</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Về <span className="text-gradient">Tôi</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 hover:glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Địa điểm</p>
                  <p className="font-semibold">Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Kinh nghiệm</p>
                  <p className="font-semibold">4+ năm làm việc</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Tổng quan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tôi là một nhà phát triển full-stack với niềm đam mê tạo ra các giải pháp 
                kỹ thuật số đẹp mắt và hiệu quả. Tôi thích học hỏi công nghệ mới và 
                luôn tìm cách cải thiện kỹ năng của mình. Khi không code, tôi thích 
                đọc sách, chơi game và khám phá những địa điểm mới.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 glass rounded-xl flex items-center justify-center glow">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <span className="text-primary font-mono text-sm">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.company}</p>
                    <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
