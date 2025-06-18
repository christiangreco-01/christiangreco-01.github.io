import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{/* {INFO.about.description} */}
									<section class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mt-8">
										<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
											{/* <!-- Technical Skills --> */}
											<div>
												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
													Front-End
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>React</li>
													<li>HTML5</li>
													<li>CSS</li>
													<li>JavaScript</li>
													<li>TypeScript</li>
												</ul>

												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-4 mb-2">
													Libraries & Tools
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>
														MUI, Ant Design,
														Bootstrap, Tailwind
													</li>
													<li>NivoCharts</li>
												</ul>

												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-4 mb-2">
													Web Design
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>Figma, Canva</li>
												</ul>

												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-4 mb-2">
													Back-End
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>Java (Spring Boot)</li>
													<li>C</li>
													<li>SQL</li>
													<li>
														REST APIs (Postman,
														Swagger)
													</li>
												</ul>
											</div>

											{/* <!-- Other Skills --> */}
											<div>
												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
													Databases
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>PostgreSQL, MySQL</li>
													<li>Supabase, Firebase</li>
												</ul>

												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-4 mb-2">
													Operating Systems
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>
														MacOS, Windows, Linux
													</li>
												</ul>

												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-4 mb-2">
													Version Control
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>
														Git (GitHub, Bitbucket)
													</li>
												</ul>

												<h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-4 mb-2">
													Soft Skills
												</h3>
												<ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
													<li>
														Teamwork, Empathy, Clear
														Communication
													</li>
													<li>
														Problem-solving under
														pressure
													</li>
													<li>
														Strong logical reasoning
													</li>
													<li>
														Multicultural experience
														(Erasmus, Internship)
													</li>
												</ul>
											</div>
										</div>
									</section>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
