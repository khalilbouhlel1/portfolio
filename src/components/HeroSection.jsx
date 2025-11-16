import { ArrowDown, Github, Linkedin, Instagram, Code, Briefcase, Award } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const roles = ["Full Stack Developer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-primary font-medium opacity-0 animate-fade-in">
                Hi, I'm
              </p>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in-delay-1 block">
                  Khalil
                </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-2 block">
                  Bouhlel
                </span>
              </h1>

              <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start opacity-0 animate-fade-in-delay-3">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  I'm a{" "}
                  <span className="text-primary font-semibold inline-block min-w-[200px] transition-all duration-500">
                    {roles[currentRole]}
                  </span>
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-4">
                I create stellar web experiences with modern technologies.
                Specializing in full-stack development, I build interfaces that are
                both beautiful and functional.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-delay-5">
              <a
                href="https://www.linkedin.com/in/khalil-bouhlel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://github.com/khalilbouhlel1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.instagram.com/bouhlel.khalil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-6">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
              >
                Get In Touch
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-8 opacity-0 animate-fade-in-delay-7">
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">29</p>
                <p className="text-xs text-muted-foreground">Repositories</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">67</p>
                <p className="text-xs text-muted-foreground">Commits</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary">54</p>
                <p className="text-xs text-muted-foreground">Contributions</p>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="hidden lg:flex items-center justify-center opacity-0 animate-fade-in-delay-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-4 border-primary/20 overflow-hidden">
                <img
                  src="/projects/profile.png"
                  alt="Khalil Bouhlel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
