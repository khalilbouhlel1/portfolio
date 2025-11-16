import { ArrowRight, ExternalLink, Github, Sparkles, Calendar, Code2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
	{
		id: 1,
		title: "Messagerie App",
		description: "Real-time messaging application with instant communication features, built with modern web technologies for seamless user experience.",
		image: "/projects/project1.png",
		tags: ["React", "TailwindCSS", "MongoDB", "Node.js", "Socket.io"],
		category: "fullstack",
		demoUrl: "#",
		githubUrl: "#",
		featured: false,
	},
	{
		id: 2,
		title: "FripiKa E-commerce",
		description:
			"Full-featured e-commerce platform offering a wide range of clothing items for all ages with secure payment integration and admin dashboard.",
		image: "/projects/fripika.mp4",
		tags: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
		category: "fullstack",
		demoUrl: "#",
		githubUrl: "#",
		featured: false,
	},
	{
		id: 3,
		title: "Delivery Service Platform",
		description:
			"Comprehensive delivery service platform with user authentication, real-time tracking, product listings, and payment integration.",
		image: "/projects/project3.png",
		tags: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
		category: "fullstack",
		demoUrl: "#",
		githubUrl: "#",
		featured: false,
	},
	{
		id: 4,
		title: "Eloquence-content",
		description:
			"Eloquence Content is a creative agency offering a range of services such as digital marketing, and more.",
		image: "/projects/eloquence.mp4",
		tags: ["Next.js", "TypeScript", "Sanity", "TailwindCSS","GSAP","Framer Motion"],
		category: "fullstack",
		demoUrl: "https://eloquence-content-2kfxhldpx-khalil-bouhlels-projects.vercel.app/",
		githubUrl: "https://github.com/khalilbouhlel1/eloquence-content",
		featured: true,
	}
];

const categories = [
	{ name: "all", label: "All Projects" },
	{ name: "fullstack", label: "Full Stack" },
	{ name: "frontend", label: "Frontend" },
	{ name: "backend", label: "Backend" },
];

export const ProjectsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredProjects = projects.filter(
		(project) => activeCategory === "all" || project.category === activeCategory
	);

	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-2 mb-4">
						<Sparkles className="h-8 w-8 text-primary" />
						<h2 className="text-4xl md:text-5xl font-bold">
							Featured <span className="text-primary">Projects</span>
						</h2>
					</div>
					<p className="text-center text-muted-foreground max-w-2xl mx-auto">
						Here are some of my recent projects. Each project was carefully
						crafted with attention to detail, performance, and user experience.
					</p>
				</div>

				{/* Category Filters */}
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{categories.map((category, key) => (
						<button
							key={key}
							onClick={() => setActiveCategory(category.name)}
							className={cn(
								"px-6 py-2 rounded-full transition-all duration-300 font-medium",
								activeCategory === category.name
									? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
									: "bg-card border border-border text-foreground hover:bg-primary/10 hover:border-primary"
							)}
						>
							{category.label}
						</button>
					))}
				</div>

				{/* Featured Projects Section */}
				{activeCategory === "all" && (
					<div className="mb-16">
						<div className="flex items-center gap-2 mb-8">
							<Code2 className="h-6 w-6 text-primary" />
							<h3 className="text-2xl font-bold">Featured Work</h3>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
							{featuredProjects.map((project) => (
								<div
									key={project.id}
									className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
								>
									<div className="absolute top-4 right-4 z-10">
										<span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
											Featured
										</span>
									</div>
									<div className="h-64 overflow-hidden relative">
										{project.image.endsWith(".mp4") ? (
											<video
												src={project.image}
												autoPlay
												loop
												muted
												playsInline
												className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
										) : (
											<img
												src={project.image}
												alt={project.title}
												className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
										)}
										<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>

									<div className="p-6">
										<div className="flex flex-wrap gap-2 mb-4">
											{project.tags.slice(0, 4).map((tag, idx) => (
												<span
													key={tag + idx}
													className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
												>
													{tag}
												</span>
											))}
											{project.tags.length > 4 && (
												<span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
													+{project.tags.length - 4}
												</span>
											)}
										</div>

										<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
										<p className="text-muted-foreground mb-6 line-clamp-2">
											{project.description}
										</p>
										<div className="flex items-center justify-between">
											<div className="flex gap-4">
												<a
													href={project.demoUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 group/link"
												>
													<ExternalLink size={18} />
													<span className="text-sm font-medium">Live Demo</span>
												</a>
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 group/link"
												>
													<Github size={18} />
													<span className="text-sm font-medium">Code</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* All Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
						>
							<div className="h-48 overflow-hidden relative">
								{project.image.endsWith(".mp4") ? (
									<video
										src={project.image}
										autoPlay
										loop
										muted
										playsInline
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								) : (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								)}
								<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-3">
									{project.tags.slice(0, 3).map((tag, idx) => (
										<span
											key={tag + idx}
											className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
										>
											{tag}
										</span>
									))}
									{project.tags.length > 3 && (
										<span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
											+{project.tags.length - 3}
										</span>
									)}
								</div>

								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
									{project.description}
								</p>
								<div className="flex items-center justify-between">
									<div className="flex gap-3">
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded-lg bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
											aria-label="View Demo"
										>
											<ExternalLink size={18} />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded-lg bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
											aria-label="View Code"
										>
											<Github size={18} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-16">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/khalilbouhlel1"
					>
						View All on GitHub <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
