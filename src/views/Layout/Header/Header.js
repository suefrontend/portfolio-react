import React from 'react';
import './styles.css';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
	return (
		<div className='container sticky'>
			<header className='header'>
				<div className='page-wrapper'>
					<nav>
						<ul className='header__nav'>
							<li className='header__nav__item'>
								<Link smooth to='/#home' className='header__nav__link'>
									Home
								</Link>
							</li>
							<li className='header__nav__item'>
								<Link smooth to='/#skills' className='header__nav__link'>
									My Skills
								</Link>
							</li>
							<li className='header__nav__item'>
								<Link smooth to='/#projects' className='header__nav__link'>
									Projects
								</Link>
							</li>
							<li className='header__nav__item'>
								<Link smooth to='/#contact' className='header__nav__link'>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Header;
