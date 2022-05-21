import React from 'react';
import ProjectItem from './ProjectsItem';
import './styles.css';

const ProjectList = ({ projects }) => {
	const renderedList = projects.map((project) => {
		return <ProjectItem project={project} />;
	});

	return (
		<div className='page'>
			<div className='page-wrapper'>
				<div className='project'>
					<h2 className='page__title page__title-center'>projects</h2>
					{renderedList}
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
