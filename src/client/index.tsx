import * as React from "react";
import * as ReactDOM from "react-dom";
import fetch from "node-fetch";
import * as Models from "./components/models";
import Projects from "./components/projects";
import ProjectUpload from "./components/project_upload";

type Props = {
	projects: Models.project[];
};

const Component: React.FunctionComponent<Props> = (props: Props) => {
	const { projects } = props;
	return (
		<div>
			<Projects projects={projects} />
			<ProjectUpload />
		</div>
	);
};

fetch("/api/").then(response => {
	console.log(response.json());
});

ReactDOM.render(
	<Component
		projects={["project1", "project2", "project3"].map(n => {
			return { name: n };
		})}
	/>,
	// eslint-disable-next-line no-undef
	document.getElementById("index")
);
