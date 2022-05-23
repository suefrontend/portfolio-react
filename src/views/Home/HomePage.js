import React from 'react';
import './styles.css';
import cubes from '../../assets/images/top/hero.jpg';

const Home = () => {
	return (
		<div className='page' id='home'>
			<div className='page-wrapper'>
				<div className='hero'>
					<div className='grid'>
						<div className='row'>
							<div className='col col-5'>
								<div className='hero__box'>
									<div className='hero__headings'>
										<h1 className='hero__headings__title'>
											<span>K</span>
											<span>a</span>
											<span>y</span>
											<span>a</span>
											<span>n</span>
											<span>o</span>
											<span> </span>
											<span>O</span>
											<span>y</span>
											<span>a</span>
											<span>m</span>
											<span>a</span>
										</h1>
										<p className='hero__headings__subtitle'>
											<span>F</span>
											<span>r</span>
											<span>o</span>
											<span>n</span>
											<span>t</span>
											<span>-</span>
											<span>e</span>
											<span>n</span>
											<span>d</span>
											<span> </span>
											<span>D</span>
											<span>e</span>
											<span>v</span>
											<span>e</span>
											<span>l</span>
											<span>o</span>
											<span>p</span>
											<span>e</span>
											<span>r</span>
										</p>
									</div>
									<div className='hero__text'>
										<p className='hero__text__title script'>
											I code and design.
										</p>
									</div>
									<div className='hero__text'>
										<p className='hero__text__body'>
											I'm a front-end developer based in Vancouver, Canada. I
											can both code and design. I like to work with customers to
											improve their user experience. I also have various CMS
											experience.
										</p>
									</div>
								</div>
							</div>
							<div className='col col-5'>
								<figure>
									<img src={cubes} alt='cubes' />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
