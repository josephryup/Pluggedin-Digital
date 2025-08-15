

import { Briefcase, Globe, Users, Star } from "lucide-react";

const projects = [
	{
		title: "Constrox Building Limited",
		description: "A comprehensive website redesign for a leading construction company, featuring modern design, project showcases, and enhanced user experience.",
		icon: <Briefcase className="w-10 h-10 text-green-glow" />,
		tags: ["Web Design", "SEO", "Showcase"],
		image: "/portfolio/constrox.jpg",
		clientLogo: "/client-logos/constrox.png",
	},
	{
		title: "ZamTech Solutions",
		description: "E-commerce platform development for a local tech retailer, featuring product catalog, online ordering, and inventory management.",
		icon: <Globe className="w-10 h-10 text-blue-500" />,
		tags: ["E-commerce", "Development", "Retail"],
		image: "/portfolio/zamtech.jpg",
		clientLogo: "/client-logos/zamtech.png",
	},
	{
		title: "GreenFields Agriculture",
		description: "Digital transformation for an agricultural cooperative, including website, mobile app, and farmer management system.",
		icon: <Users className="w-10 h-10 text-green-600" />,
		tags: ["Mobile App", "Web", "Agriculture"],
		image: "/portfolio/greenfields.jpg",
		clientLogo: "/client-logos/greenfields.png",
	},
	{
		title: "EduConnect Zambia",
		description: "Online learning platform connecting students and teachers across Zambia, featuring virtual classrooms and progress tracking.",
		icon: <Star className="w-10 h-10 text-yellow-accent" />,
		tags: ["EdTech", "Learning", "Platform"],
		image: "/portfolio/educonnect.jpg",
		clientLogo: "/client-logos/educonnect.png",
	},
];

const testimonials = [
	{
		name: "Chanda Mwansa",
		company: "Constrox Building Limited",
		quote: "Pluggedin Digital transformed our online presence. The new site is modern, fast, and our clients love it!",
	},
	{
		name: "Loveness Phiri",
		company: "GreenFields Agriculture",
		quote: "Their team delivered a seamless experience from start to finish. Highly recommended for digital projects!",
	},
];

const processSteps = [
	{
		title: "Discovery",
		description: "We learn about your business, goals, and audience to craft the perfect solution.",
	},
	{
		title: "Design & Build",
		description: "Our team creates beautiful, functional digital products tailored to your needs.",
	},
	{
		title: "Launch & Support",
		description: "We launch your project and provide ongoing support to ensure success.",
	},
];

const Portfolio = () => (
	<div className="min-h-screen py-20 px-4 bg-background">
		<div className="max-w-6xl mx-auto">
			{/* Intro Section */}
			<div className="text-center mb-16">
				<h1 className="text-5xl md:text-7xl font-bebas text-green-glow mb-4 drop-shadow-lg">Portfolio</h1>
				<h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 font-poppins">Our Recent Work</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-4 font-poppins">
					Explore how Pluggedin Digital helps businesses grow with custom websites, apps, and digital solutions.
				</p>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
				{projects.map((project, idx) => (
					<div key={idx} className="bg-card rounded-2xl p-0 shadow-xl border border-green-200 hover:scale-[1.03] transition-transform duration-200 flex flex-col items-start overflow-hidden">
						<div className="w-full h-48 md:h-64 bg-background flex items-center justify-center overflow-hidden">
							<img src={project.image} alt={project.title + ' screenshot'} className="object-cover w-full h-full" />
						</div>
						<div className="flex items-center gap-3 mt-4 mb-2">
							{project.icon}
							<h2 className="text-2xl font-bebas text-green-glow tracking-wide drop-shadow-md">{project.title}</h2>
							<img src={project.clientLogo} alt={project.title + ' logo'} className="w-8 h-8 rounded-full border border-green-100 bg-white" />
						</div>
						<p className="text-base text-muted-foreground font-poppins mb-4 px-6">{project.description}</p>
						<div className="flex flex-wrap gap-2 mb-4 px-6">
							{project.tags.map((tag, i) => (
								<span key={i} className="px-3 py-1 rounded-full bg-green-glow/10 text-green-glow text-xs font-semibold font-poppins">{tag}</span>
							))}
						</div>
						<button className="mt-auto mx-6 mb-6 px-5 py-2 rounded-full bg-green-glow text-background font-bold shadow hover:bg-green-600 transition-colors">View Project</button>
					</div>
				))}
			</div>

			{/* How We Work Section */}
			<div className="bg-background rounded-2xl shadow-lg p-10 border border-green-100 mb-16">
				<h3 className="text-2xl font-bebas text-green-glow mb-6">How We Work</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{processSteps.map((step, idx) => (
						<div key={idx} className="bg-card p-6 rounded-xl border border-green-100 shadow hover:shadow-green-glow/20 transition-shadow duration-200">
							<h4 className="text-lg font-bold text-green-glow mb-2 font-poppins">{step.title}</h4>
							<p className="text-muted-foreground font-poppins">{step.description}</p>
						</div>
					))}
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="bg-background rounded-2xl shadow-lg p-10 border border-green-100 mb-16">
				<h3 className="text-2xl font-bebas text-green-glow mb-6">Client Testimonials</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{testimonials.map((t, idx) => (
						<div key={idx} className="bg-card p-6 rounded-xl border border-green-100 shadow hover:shadow-green-glow/20 transition-shadow duration-200">
							<p className="text-lg text-muted-foreground mb-4 font-poppins">"{t.quote}"</p>
							<div className="font-bold text-green-glow font-poppins">{t.name}</div>
							<div className="text-xs text-muted-foreground font-poppins">{t.company}</div>
						</div>
					))}
				</div>
			</div>

			{/* Call to Action */}
			<div className="text-center mt-10">
				<h4 className="text-xl font-bold text-green-glow mb-4 font-poppins">Ready to start your project?</h4>
				<a href="/contact" className="inline-block px-8 py-4 rounded-full bg-green-glow text-background font-bold shadow hover:bg-green-600 transition-colors font-poppins">Contact Us</a>
			</div>
		</div>
	</div>
);

export default Portfolio;