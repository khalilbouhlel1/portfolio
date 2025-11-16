import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code, 
  Database, 
  Wrench, 
  Layers,
  FileCode,
  Globe,
  Box,
  Server,
  GitBranch,
  Container,
  Key,
  Palette,
  Package,
  Terminal,
  Image as ImageIcon,
  Video,
  FileJson,
  Zap,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML5", category: "frontend", icon: FileCode },
  { name: "CSS3", category: "frontend", icon: FileCode },
  { name: "JavaScript", category: "frontend", icon: Code },
  { name: "TypeScript", category: "frontend", icon: Code },
  { name: "React", category: "frontend", icon: Layers },
  { name: "Angular", category: "frontend", icon: Layers },
  { name: "Bootstrap", category: "frontend", icon: Globe },
  { name: "Tailwind CSS", category: "frontend", icon: Globe },
  { name: "Ionic", category: "frontend", icon: Globe },
  { name: "Vite", category: "frontend", icon: Zap },
  { name: "Framer", category: "frontend", icon: Palette },

  // Backend
  { name: "Node.js", category: "backend", icon: Server },
  { name: "Express.js", category: "backend", icon: Box },
  { name: "PHP", category: "backend", icon: Code },
  { name: "Laravel", category: "backend", icon: Server },
  { name: "Python", category: "backend", icon: Code },
  { name: "Django", category: "backend", icon: Server },
  { name: "JWT", category: "backend", icon: Key },
  { name: "Clerk", category: "backend", icon: Key },

  // Databases
  { name: "MongoDB", category: "backend", icon: Database },
  { name: "MySQL", category: "backend", icon: Database },

  // Tools
  { name: "Git", category: "tools", icon: GitBranch },
  { name: "GitHub", category: "tools", icon: GitBranch },
  { name: "NPM", category: "tools", icon: Package },
  { name: "Nodemon", category: "tools", icon: Terminal },
  { name: "Postman", category: "tools", icon: FileJson },
  { name: "Notion", category: "tools", icon: FileCode },
  { name: "Sanity", category: "tools", icon: Database },
  { name: "LLMs", category: "tools", icon: Zap },
  { name: "VS Code", category: "tools", icon: Code },
  { name: "Cursor", category: "tools", icon: Code },

  // Design
  { name: "Adobe Illustrator", category: "design", icon: ImageIcon },
  { name: "Adobe Photoshop", category: "design", icon: ImageIcon },
  { name: "Adobe Premiere Pro", category: "design", icon: Video },
];

const categories = [
  { name: "all", icon: Layers, label: "All Skills" },
  { name: "frontend", icon: Code, label: "Frontend" },
  { name: "backend", icon: Server, label: "Backend" },
  { name: "tools", icon: Wrench, label: "Tools" },
  { name: "design", icon: Palette, label: "Design" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_SKILLS_COUNT = 10;

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false); // Reset showAll when category changes
  };

  const displayedSkills = showAll 
    ? filteredSkills 
    : filteredSkills.slice(0, INITIAL_SKILLS_COUNT);
  
  const hasMoreSkills = filteredSkills.length > INITIAL_SKILLS_COUNT;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, key) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(category.name)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : "bg-card border border-border text-foreground hover:bg-primary/10 hover:border-primary"
                )}
              >
                <CategoryIcon className="h-4 w-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {displayedSkills.map((skill, key) => {
            const SkillIconComponent = skill.icon;
            return (
              <div
                key={key}
                className="group relative bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col items-center justify-center text-center"
              >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                      <SkillIconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {hasMoreSkills && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cosmic-button flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-5 w-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5" />
                  Show More ({filteredSkills.length - INITIAL_SKILLS_COUNT} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
