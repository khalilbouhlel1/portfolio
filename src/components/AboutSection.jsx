import { Code, User, Download, FileText, Award, Briefcase, Target, Sparkles } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Briefcase, value: "29", label: "Repositories" },
    { icon: Target, value: "67", label: "Total Commits" },
    { icon: Award, value: "54", label: "Contributions" },
    { icon: Code, value: "25+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for creating digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl transform rotate-6"></div>
              <div className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border-4 border-primary/20 overflow-hidden">
                <img
                  src="/projects/profile.png"
                  alt="Khalil Bouhlel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Full Stack Web Developer
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate full stack developer with years of experience building responsive, 
              accessible, and performant web applications from front-end to back-end using modern technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise covers both client-side and server-side development, allowing me to 
              deliver complete solutions tailored to user needs. I love turning complex problems 
              into simple, beautiful, and intuitive solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button flex items-center justify-center gap-2">
                Get In Touch
              </a>
              <a
                href="/projects/Khalil bouhlel CV_compressed-2.pdf"
                download
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-2">Web Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating responsive websites and web applications with modern frameworks 
                    like React, Next.js, and Node.js. Building scalable solutions that perform 
                    beautifully across all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-2">UI/UX Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Designing intuitive user interfaces and seamless user experiences. 
                    Focusing on accessibility, usability, and creating delightful interactions 
                    that users love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
