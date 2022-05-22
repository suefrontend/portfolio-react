import React from 'react';

const SkillItem = ({ skill }) => {
	return (
		<>
			<li className='skills-item-wrap'>
				<span className={`skills-item skills-item-${skill.toLowerCase()}`}>
					{skill}
				</span>
			</li>
		</>
	);
};
export default SkillItem;
