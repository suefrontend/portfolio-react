import React from 'react';
import './styles.css';

const Skills = () => {
  return (
    <div className="page page-gray">
      <div className="page-wrapper">
        <div className="skills">
          <div className="grid">
            <div className="row text-right">
              <div className="col col-6">
                <h2 className="page__title sp-text-center">my skills</h2>
                <div className="skills__label">
                  <span className="skills__label__item">front-end development</span>
                  <span className="skills__label__item">web design</span>
                  <span className="skills__label__item">CMS development</span>
                </div>
                <p className="sp-text-left">I have 4+ years web development experience in 
                  HTML, CSS, JavaScript, building and designing
                  websites, shopping cart systems, and content management systems.<br />                  
                  I use Photoshop to design web pages and UI components, 
                  and edit photos for production.
                  </p>
              </div>
              <div className="col col-4">
                <ul className="skills-list">
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-html">HTML5</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-css">CSS3</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-javascript">JavaScript</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-illustrator">Illustrator</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-photoshop">Photoshop</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-wordpress">WordPress</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-vue">Vue</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-react">React</span>
                  </li>
                  <li className="skills-item-wrap">
                    <span className="skills-item skills-item-sass">Sass</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
