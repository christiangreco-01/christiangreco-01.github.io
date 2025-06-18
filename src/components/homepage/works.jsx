import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logo_hrm.png"
								alt="logo hrm"
								className="work-image"
							/>
							<div className="work-title">HRM Group</div>
							<div className="work-subtitle">Developer</div>
							<div className="work-duration">
								11/2024 - Present
							</div>
						</div>
						<div className="project-description">
							Contributed to the development of large-scale web
							applications, primarily focusing on front-end
							features using React and MUI. Frequently
							collaborated with the back-end team, integrating
							REST APIs and handle data flow. Gained experience
							working with various database technologies across
							different projects, including Supabase, Firebase,
							PostgreSQL, and MySQL.
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
