import React from 'react';
import SkillItem from './SkillsItem';
import './styles.css';

const Skills = ({ skills }) => {
	const renderedList = skills.map((skill) => {
		return <SkillItem skill={skill} />;
	});

	return (
		<div className='page page-gray'>
			<div className='page-wrapper'>
				<div className='skills'>
					<div className='grid'>
						<div className='row text-right'>
							<div className='col col-6'>
								<h2 className='page__title sp-text-center'>my skills</h2>
								<div className='skills__label'>
									<span className='skills__label__item'>
										front-end development
									</span>
									<span className='skills__label__item'>web design</span>
									<span className='skills__label__item'>CMS development</span>
								</div>
								<p className='sp-text-left'>
									I have 4+ years web development experience in HTML, CSS,
									JavaScript, building and designing websites, shopping cart
									systems, and content management systems.
									<br />I use Photoshop to design web pages and UI components,
									and edit photos for production.
								</p>
							</div>
							<div className='col col-4'>
								<ul className='skills-list'>{renderedList}</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
