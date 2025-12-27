import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Nền tảng thương mại điện tử với đầy đủ tính năng thanh toán, quản lý đơn hàng và dashboard admin.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Ứng dụng quản lý công việc với tính năng kéo thả, thông báo real-time và collaboration.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "AI Chatbot Interface",
    description: "Giao diện chatbot AI với khả năng xử lý ngôn ngữ tự nhiên và phản hồi thông minh.",
    tags: ["React", "OpenAI API", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Template",
    description: "Template portfolio hiện đại với animation mượt mà và responsive design.",
    tags: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard thời tiết với dữ liệu real-time và biểu đồ trực quan.",
    tags: ["Vue.js", "Chart.js", "Weather API"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Blog Platform",
    description: "Nền tảng blog với CMS, markdown support và SEO optimization.",
    tags: ["Next.js", "MDX", "Vercel"],
    github: "https://github.com",
    featured: false,
  },
];

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Dự Án <span className="text-gradient">Nổi Bật</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:glow hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-muted-foreground">Các Dự Án Khác</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground text-xs">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
