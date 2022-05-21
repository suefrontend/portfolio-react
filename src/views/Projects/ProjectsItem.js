import React from 'react';
import project03 from '../../assets/images/projects/bark-walk.jpg';

const ProjectItem = ({ project }) => {
	console.log('project.thumbnail', project.thumbnail);

	return (
		<>
			<div className='project__item' key={project.title}>
				<div className='row'>
					<div className='col col-5'>
						<figure className='project__item__img-desktop'>
							<img
								className='project__item__img'
								src={project.thumbnail}
								alt={project.title}
							/>
						</figure>
					</div>
					<div className='col col-5'>
						<h3 className='project__title'>{project.title}</h3>
						<span className='project__subtitle'>{project.subtitle}</span>
						<div className='project__label'>
							{project.skills.map((skill) => {
								return <span className='project__label__item'>{skill}</span>;
							})}
						</div>
						<p className='project__text'>
							{project.description}

							{project.note && (
								<>
									<br />
									<br />
									<span className='attention'>{project.note}</span>
								</>
							)}
						</p>
						<div class='project__link'>
							{project.link && (
								<a class='btn btn-green' href={project.link} target='_blank'>
									view live
								</a>
							)}
							{project.github && (
								<a class='btn btn-green' href={project.github} target='_blank'>
									github
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectItem;
