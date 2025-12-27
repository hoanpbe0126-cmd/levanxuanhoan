import { Code2, Languages } from "lucide-react";

const programmingSkills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React/Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "HTML/CSS/Tailwind", level: 95 },
  { name: "SQL/PostgreSQL", level: 75 },
  { name: "Git/GitHub", level: 90 },
  { name: "Docker", level: 70 },
];

const languageSkills = [
  { name: "Tiếng Việt", level: 100, flag: "🇻🇳" },
  { name: "Tiếng Anh", level: 85, flag: "🇬🇧" },
  { name: "Tiếng Nhật", level: 60, flag: "🇯🇵" },
  { name: "Tiếng Trung", level: 40, flag: "🇨🇳" },
];

const SkillBar = ({ name, level, flag }: { name: string; level: number; flag?: string }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium flex items-center gap-2">
        {flag && <span className="text-xl">{flag}</span>}
        {name}
      </span>
      <span className="text-primary font-mono text-sm">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out group-hover:glow"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">KỸ NĂNG</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Năng Lực <span className="text-gradient">Chuyên Môn</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Ngôn Ngữ Lập Trình</h3>
            </div>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Language Skills */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Ngoại Ngữ</h3>
            </div>
            
            <div className="space-y-6">
              {languageSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} flag={skill.flag} />
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">IELTS:</span> 7.0 | 
                <span className="text-primary font-semibold ml-2">JLPT:</span> N3
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
