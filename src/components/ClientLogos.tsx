import React from "react";
import { motion } from "framer-motion";

const logos = [
	{ src: "/logo1.png", alt: "Client 1" },
	{ src: "/logo2.png", alt: "Client 2" },
	{ src: "/logo3.png", alt: "Client 3" },
	{ src: "/logo4.png", alt: "Client 4" },
	{ src: "/logo5.png", alt: "Client 5" },
	{ src: "/logo6.png", alt: "Client 6" }
];

const ClientLogos = () => (
	<section className="py-16 px-4 bg-background">
		<div className="max-w-5xl mx-auto">
			<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
				Our Clients
			</h2>
			<div className="overflow-hidden relative">
				<motion.div
					className="flex gap-12 items-center"
					animate={{ x: [0, -400] }}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop" as const,
							duration: 12,
							ease: "linear"
						}
					}}
					style={{ minWidth: "max-content" }}
				>
					{logos.concat(logos).map((logo, idx) => (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
							className="p-4 flex items-center justify-center"
						>
							<img
								src={logo.src}
								alt={logo.alt}
								className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	</section>
);

export default ClientLogos;
